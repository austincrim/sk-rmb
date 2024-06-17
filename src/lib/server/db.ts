import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

export const connection = new Database('database/sqlite.db')
export const db = drizzle(connection)
