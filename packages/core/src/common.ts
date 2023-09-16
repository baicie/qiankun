import type { BaseOptions } from './index'

interface SandboxCache {
  wujie?: any
  options?: BaseOptions
}

export const idToSandboxCacheMap = new Map<string, SandboxCache>()

export function addSandboxCacheWithOptions(
  id: string,
  options: SandboxCache,
) {
  const wujieCache = idToSandboxCacheMap.get(id)

  if (wujieCache)
    idToSandboxCacheMap.set(id, { ...wujieCache, ...options })
  else
    idToSandboxCacheMap.set(id, options)
}

export function getWujieById(id: string) {
  return idToSandboxCacheMap.get(id)
}
