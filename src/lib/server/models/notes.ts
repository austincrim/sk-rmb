import { sql } from 'drizzle-orm'
import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core'

export default sqliteTable('notes', {
  id: integer('id').primaryKey(),
  content: text('content').default(''),
  updated: integer('updated').default(sql`current_timestamp`),
})
