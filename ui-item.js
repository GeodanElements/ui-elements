import {LitElement, html} from '@polymer/lit-element';
import "@polymer/iron-icon";

/**
 * `fold-sheet`
 * Model like sheet that can fold under another element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UiItem extends LitElement {
  _render({head}) {
    return html`
      <style>
        :host {
          position: relative;
          background: white;
          padding: 5px;
          text-align: left;

        }
        #block {
            display: flex;
            flex-direction: row;
        }
        #content {
            padding-left: 20px;
            width: 450px;
        }
        iron-icon {
            align-self: stretch;
            width: 50px;
        }
      </style>
      
      <div id="block">
        <iron-icon icon="menu"></iron-icon>
        <div id='content'>
            <div><slot name='title'>${head}</slot></div>
            <slot></slot>
        </div>
      </div>
      
    `;
  }
  static get properties() {
    return {
        head: String
    };
  }
  constructor(){
    super();
  }
}

window.customElements.define('ui-item', UiItem);
