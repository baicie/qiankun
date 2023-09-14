import type { Options } from './index'

export const idToSandboxCacheMap = new Map<string, Options>()

export function addSandboxCacheWithOptions(
  id: string,
  options: Options,
) {
  const wujieCache = idToSandboxCacheMap.get(id)

  if (wujieCache)
    idToSandboxCacheMap.set(id, { ...wujieCache, ...options })
  else
    idToSandboxCacheMap.set(id, options)
}
