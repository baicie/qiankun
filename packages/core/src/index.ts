import { addSandboxCacheWithOptions, getWujieById } from './common'
import { WUJIE_TIPS_NOT_SUPPORTED } from './constant'
import { defineWujieComponent } from './shadow'
import { warn, wujieSupport } from './utils'

export interface BaseOptions {
  name: string
}

export type StartOptions = BaseOptions & {

}

if (!wujieSupport)
  warn(WUJIE_TIPS_NOT_SUPPORTED)

defineWujieComponent()

export function setupApp(
  options: BaseOptions,
): void {
  if (options.name)
    addSandboxCacheWithOptions(options.name, options)
}

export async function startApp(startOptions: StartOptions): Promise<Function | void> {
  const cache = getWujieById(startOptions.name)
  const sandbox = cache?.wujie
  const cacheOptions = cache?.options

  // const options
}
