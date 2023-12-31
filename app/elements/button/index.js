import { render } from 'preact'
import { html } from 'htm/preact'
import Style from './Style.js'
import Button from '../../components/Button.js'

export const tagName = 'button'

export class Element extends HTMLElement {
  onClick = (event, children) => {
    event.stopImmediatePropagation()

    this.dispatchEvent(
      new CustomEvent('click', {
        bubbles: true,
        composed: true,
        detail: children,
      })
    )
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' })

    render(
      html`
        <${Style} />
        <${Button} onClick=${this.onClick} />
      `,
      shadowRoot
    )

    // Transfer children to the button element.
    const element = shadowRoot.querySelector('button')
    element.appendChild(...this.children)
  }
}
