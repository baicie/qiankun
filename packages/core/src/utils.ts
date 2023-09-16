export const wujieSupport = window.Proxy && window.CustomElementRegistry

export function warn(msg: string, data?: any): void {
  console?.warn(`[wujie mini warn]: ${msg}`, data)
}
