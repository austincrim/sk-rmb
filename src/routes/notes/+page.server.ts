export function load(event) {
  return { notes: event.locals.notes ?? [] }
}
