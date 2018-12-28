import {LitElement, html} from '@polymer/lit-element';
import './ui-panel.js';
import './ui-sheets.js';
/**
 * `fold-sheet`
 * Model like sheet that can fold under another element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UiPanelSheets extends LitElement {
  _render({prop1}) {
    return html`
      <style>
        :host {

        }
        :host(ui-panel) {
          z-index: 10;
        }
        :host(ui-sheet) {
          z-index: 1;
        }
        
      </style>
      <slot></slot>
    `;
  }
  static get properties() {
    return {
      activeSheetIndex: Number
    };
  }
  constructor(){
    super();
    this.activeSheetIndex = 0;
  }
}

window.customElements.define('ui-panel-sheets', UiPanelSheets);

