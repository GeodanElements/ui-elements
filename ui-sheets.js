import {LitElement, html} from '@polymer/lit-element';
import './ui-sheet.js';

/**
 * `fold-sheet`
 * Model like sheet that can fold under another element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UiSheets extends LitElement {
  _render({foldstatus}) {
    return html`
      <style>
        :host {
          position: absolute;
          display: block;
          background: white;
          top: 200px;
          bottom: 100px;
          left: 420px;
          padding-left: 100px;
          z-index: 1;
          width: 50%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .folded {
            background: grey;
        }
        .unfolded {
            background: red;
        }
        
      </style>
      <div class='${foldstatus}'>
        <slot></slot>
      </div>
      
    `;
  }
  static get properties() {
    return {
      activeSheetIndex: Number,
      sheetActive: Boolean
    };
  }
  constructor(){
    super();
    this.activeSheetIndex = 0;
  }
}

window.customElements.define('ui-sheets', UiSheets);
