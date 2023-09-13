import { registerApplication } from 'single-spa'
import { noop } from 'lodash'

export function registerMicroApps() {
  registerApplication()
  noop()
}
