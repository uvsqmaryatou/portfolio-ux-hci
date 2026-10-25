/** Build a URL for a file inside Vite's public directory, including the deploy base. */
export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
