import * as buttonList from './elements/button-list/index.js'
import * as button from './elements/button/index.js'

const prefix = 'wil'

customElements.define(`${prefix}-${buttonList.tagName}`, buttonList.Element)
customElements.define(`${prefix}-${button.tagName}`, button.Element)
