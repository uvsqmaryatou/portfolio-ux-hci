/** Build an internal site URL under Vite's configured deployment base. */
export function sitePath(path) {
  const suffix = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${suffix}`
}
