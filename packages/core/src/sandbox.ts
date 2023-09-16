import { iframeGenerator } from './iframe'

export default class Wujie {
  public id: string
  public url: string
  public iframe: any

  constructor(options: {
    name: string
    url: string
  }) {
    const { name, url } = options
    this.id = name
    this.url = url

    this.iframe = iframeGenerator(this)
  }
}
