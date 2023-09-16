import type Wujie from './sandbox'

export function iframeGenerator(
  sandbox: Wujie,
) {
  const iframe = window.document.createElement('iframe')

  window.document.body.appendChild(iframe)

  const iframeWindow = iframe.contentWindow

  return iframe
}
