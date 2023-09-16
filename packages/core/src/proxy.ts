export function proxyGenerator(
  iframe: HTMLIFrameElement,

) {
  const proxyDocument = new Proxy(
    {},
    {
      get() { },
    },
  )
}
