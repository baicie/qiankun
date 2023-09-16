export function defineWujieComponent() {
  const customElements = window.customElements

  if (customElements && !customElements.get('wujie-app')) {
    class WujieApp extends HTMLElement {
      // connec
    }

    customElements.define('wujie-app', WujieApp)
  }
}
