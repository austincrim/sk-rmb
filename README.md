# SvelteKit Route Model Binding

A take on implementing Laravel-style route model binding in SvelteKit.

Given a route like `/notes/1`, the server `handle` hook will try to find a `note` with the corresponding `id` and provide it to the route's `page.server.ts` through `event.locals`.

This removes the usual boilerplate of parsing params, fetching, handling not found, errors, etc.

[The interesting bit](./src/hooks.server.ts)

[Usage](./src/routes/notes/[id]/+page.server.ts)

## Get Started

```bash
npm install
npm run dev
```
