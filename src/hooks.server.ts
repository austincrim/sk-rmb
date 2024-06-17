import { db } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import { sql } from 'drizzle-orm'
import { getTableConfig, type SQLiteTable } from 'drizzle-orm/sqlite-core'

let modelCache = new Map()

export async function handle({ event, resolve }) {
  let segments = event.url.pathname.substring(1).split('/')
  let modelName = segments[0]
  const isDetailRequest = Boolean(segments[1])

  let model = modelCache.get(modelName)
  if (!model) {
    try {
      let module = (await import(`$lib/server/models/${modelName}.ts`)) as {
        default: SQLiteTable
      }
      model = module.default
      modelCache.set(modelName, model)
    } catch (e) {
      console.log(`model "${modelName}" not found for binding`)
      return await resolve(event)
    }
  }
  let name = getTableConfig(model).name
  let data = isDetailRequest
    ? await db
        .select()
        .from(model)
        .where(sql`id = ${segments[1]}`)
    : await db.select().from(model)

  if (data.length === 0 && isDetailRequest) {
    return error(404, 'Not Found')
  }
  event.locals[name] = data
  return await resolve(event)
}
