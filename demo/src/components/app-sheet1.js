import {LitElement, html} from '@polymer/lit-element';
import "@polymer/paper-button";

import '/ui-item.js';
import "/geodan-style.js";

class AppSheet1 extends LitElement {
    _render({geodanStyle
    }) {
      return html`
        
        <style>
            :host {
                display: flex;
                align-items: center;
                flex-direction: column;
                text-align: center;
            }
            h1 {
                font-family: var(--geodan-regular-font);
            }
            h3 {
                font-family: var(--geodan-regular-font);
            }
            a {
                color: var(--geodan-button-normal);
            }
            p {
                font-family: var(--geodan-regular-font)
            }
            paper-button.geodan {
                background:var(--geodan-button-normal);
                color:white;
                --paper-button-ink-color: var(--geodan-button-normal);
                --paper-button-disabled: var(--geodan-button-disabled);
            }
            paper-button.geodan:hover {
                background:var(--geodan-button-hover);
            }
            paper-button.geodan-light {
                background:var(--geodan-color-light);
                color:#6D4A53;
                --paper-button-ink-color: var(--geodan-button-normal);
                --paper-button-disabled: var(--geodan-button-disabled);
            }

            paper-button.geodan a{
                color: white;
            }
            .vertical {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .vertical ui-item {
                align-self: stretch;
            }
        </style>
            <h1>Welkom bij 3Ddatalab</h1>
            <p>Bestel eenvoudig 3D-omgevingsmodellen voor geluidsstudies. <br>
                De modellering is conform de wettelijke eisen voor SRM2-geluidsstudies
            </p>
            <div class='vertical'>
                <ui-item>
                    <span slot='title'>3D-GEBOUWEN</span>
                    <span>Blokken op nokhoogte, waarbij een gebouw is gesplitst op relevantet internet hoogte verschillen. De panden zijn voorzien van adres- en functie-informatie</span>
                </ui-item>  
                <ui-item>
                    <span slot='title'>3D-HOOGTELIJNEN</span>
                    Breaklines (schouder en teen van een talud)
                </ui-item>
                <ui-item>
                    <span slot='title'>2D-BODEMGEBIEDEN</span>
                    Verharding en water met B=0
                </ui-item>
            </div>
            <p>De bestanden zijn geschikt voor import in GEOMilieu en WinHavik.</p>
            <p><a>Meer informatie over de kwaliteit van de data</a></p>
            <div>
                <paper-button class='geodan-light' on-click='""'>GRATIS PROEFSET</paper-button>
                <paper-button class='geodan' on-click='${_=>this.dispatchEvent(new CustomEvent('close',{bubbles: true}))}'>SELECTIE MAKEN</paper-button>
            </div>



    `
    }
    static get properties() {
        return {
        };
      }
      constructor(){
        super();
      }
    }
    
window.customElements.define('app-sheet1', AppSheet1);
    
