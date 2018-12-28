import {LitElement, html} from '@polymer/lit-element';
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/paper-icon-button";

/**
 * `fold-sheet`
 * Model like sheet that can fold under another element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UiPanel extends LitElement {
  _render({}) {
    return html`
    <style>
        :host {
            display: block;
            position: absolute;
            z-index: 9;
            width: 410px;
            top: 20px;
            bottom: 20px;
            left: 20px;
            background-color: white;
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
        }

        .title {
            font-size: 20pt;
            padding: 10px;
            
        }
        .content {
            padding: 25px;
        }
        .footer {
            position: absolute;
            text-align: center;
            color: white;
            width: 100%;
            font-size: 24px;
            font-weight: bold;
            line-height: 29px;
            background: var(--geodan-button-normal);
            bottom: 0px;
        }
        .footer:hover {
            background: var(--geodan-button-hover);
        }
        .footer:pressed {
            background: var(--geodan-button-pressed);
        }
        
    </style>

    <div class='title'>
        <paper-icon-button icon="menu"></paper-icon-button><slot name='title'></slot>
    </div>
    <div class='content'>
        <slot name='content'></slot>
    </div>
    <div class='footer'>
      <slot name='footer'></slot>
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
}

window.customElements.define('ui-panel', UiPanel);
