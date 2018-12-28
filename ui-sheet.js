import {LitElement, html} from '@polymer/lit-element';
import "@polymer/iron-icons/iron-icons.js";
import '@polymer/paper-icon-button';

/**
 * `fold-sheet`
 * Model like sheet that can fold under another element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UiSheet extends LitElement {
  _render({foldclass}) {
    return html`
      <style>
        :host {
          position: absolute;
          display: block;
          background: white;
          top: 200px;
          bottom: 100px;
          left: 420px;
          z-index: 1;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          transition: left .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);
        }
        :host([hidden]) {
            left: -550px;
        }
        .content {
            display: block;
            padding: 20px;
            padding-left: 100px;
        }
        #closebutton {
            position: absolute;
            right: 20px;
        }
        
      </style>
      
      <div class='content'>
        <paper-icon-button id="closebutton" icon="close" on-click="${this.fireClose}"></paper-icon-button>
        <slot></slot>
        
      </div>
      
    `;
  }
  static get properties() {
    return {
    };
  }
  constructor(){
    super();
  }
  fireClose(){
    this.dispatchEvent(new CustomEvent('close', {bubbles: true, composed: true}));
  }
}

window.customElements.define('ui-sheet', UiSheet);
