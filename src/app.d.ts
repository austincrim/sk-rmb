// See https://kit.svelte.dev/docs/types#app

import type notes from '$lib/server/models/notes'
import type { InferSelectModel } from 'drizzle-orm'
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      notes?: Array<InferSelectModel<typeof notes>>
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
