import {LitElement, html} from '@polymer/lit-element';
import { connect } from  'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

import "@polymer/paper-checkbox";
import "@polymer/paper-button";
import "@polymer/paper-input/paper-input.js";
import "@polymer/iron-icon";
import "@polymer/paper-badge";
import "@polymer/paper-material";
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';

import '/ui-panel-sheets.js';
import '/ui-panel.js';
import '/ui-sheets.js';
import '/ui-sheet.js';
import './app-sheet1.js';
import './app-map.js';
import '/ui-search.js';


class DemoApp extends connect(store)(LitElement) {
    _render({
        _activeSheet,
        buildings,	
		breaklines,	
		hardness,	
		hokken,	
		numItems,	
        total,
        selectedHokken	
    }) {
      return html`
        
        <style>

            :host {
                display: block;
                -webkit-font-smoothing: antialiased;
                --geodan-regular-font: 'Lato', sans-serif;;
                --geodan-light-font: 'Lato', sans-serif;
                --geodan-heading1-fontsize: 24px;
                --geodan-heading2-fontsize: 17px;
                --geodan-heading3-fontsize: 14px;
                --geodan-regular-fontsize: 12px;
                --geodan-light-fontweight: 300;
                --geodan-color: #333333;
                --geodan-color-light: #E5CED4;
                --geodan-color-grey: lightgrey;
                --geodan-button-normal: #ED3031;
                --geodan-button-hover:  #D60000;
                --geodan-button-pressed: #BB0C16;
                --geodan-button-disabled: #ECECEC;

                --geodan-checkbox-unckeched: #E3E2E3;
                --geodan-checkbox-checked: #ED3031;

                --geodan-header-background:  #424242;
                
                color: var(--geodan-color);
            }
            
            h1 {
                font-family: var(--geodan-regular-font);
                font-size: var(--geodan-heading1-fontsize);
            }
            h2 {
                font-family: var(--geodan-regular-font);
                font-size: var(--geodan-heading2-fontsize);
            }
            h3 {
                font-family: var(--geodan-regular-font);
                font-size: var(--geodan-heading3-fontsize);
            }

            .title {
                font-family: var(--geodan-regular-font);
                font-size: var(--geodan-heading1-fontsize);
            }
            paper-button {
                font-family: var(--geodan-regular-font);
            }
            paper-button.geodan {
                background:var(--geodan-button-normal);
                color:white;
                font-family: var(--geodan-regular-font);
                --paper-button-ink-color: var(--geodan-button-normal);
                --paper-button-disabled: var(--geodan-button-disabled);
            }
            paper-button.geodan:hover {
                background:var(--geodan-button-hover);
            }
            paper-button.geodangrey {
                background-color: var(--geodan-color-grey);
            }
            paper-button.geodan a{
                color: white;
            }
            paper-button.help {
                color: #6D4A53;
                font-size: 14px;
            }
            paper-icon-button {
                color: var(--geodan-button-normal);
                --paper-icon-button-ink-color: var(--geodan-button-normal);
            }
            paper-badge {
                --paper-badge-background: #6D4A53;
            }
            p {
                font-family: var(--geodan-regular-font);
            }
            p.hint {
                color: var(--geodan-color-grey);
                width: 300px;
            }
            a {
                text-decoration: none;
                color: var(--geodan-color);
            }
            paper-checkbox {
                font-family: var(--geodan-regular-font);
                --paper-checkbox-unchecked-color: var(--geodan-checkbox-unchecked);
                --paper-checkbox-unchecked-ink-color: var(--geodan-checkbox-checked);
                --paper-checkbox-checked-color: var(--geodan-checkbox-checked);
                --paper-checkbox-checked-ink-color: var(--geodan-checkbox-unchecked);
                --paper-checkbox-checkmark-color: white;
                margin: 5px;
            }

            .pricetag {
                margin-top: 20px;
                margin-bottom: 10px;
                display: block;
                padding: 10%;
                
                
                background-color: var(--geodan-color-light);
                color: #6D4A53;
            }
            .pricetag .price {
                font-size: 40px;
            }
            app-map {
                height: 100%;
                width: 1000px;
            }
           
        </style>
        <div class="flex">
				<app-map id="map" 

				></app-map>
		</div>
        <ui-panel-sheets>
          <ui-panel>
            <span slot='title'>3Ddatalab</span>
            <div slot='content'>
                <ui-search
                    servicekey="2021faff-cc40-11e6-a549-52540031712c"
					on-goto-coords="${_ => this.zoomTo(_)}"
                    ></ui-search>
                    <!--
                <paper-input label="Navigeer naar...">
                    <iron-icon icon="search" slot="prefix"></iron-icon>
                </paper-input>
                -->
                <h2>GEBIED SELECTEREN</h2>
                <p class='hint'>Klik op de kaart om het gewenste studiegebied te selecteren</p>
                <paper-button class='geodangrey' on-click=''>SELECTIE ONGEDAAN MAKEN</paper-button><br>
                
                <h2>BESTANDSTYPEN</h2>
                <vaadin-vertical-layout>
                    <paper-checkbox checked='${buildings}'>Gebouwen</paper-checkbox>
                    <paper-checkbox checked='${breaklines}'>Hoogtelijnen</paper-checkbox>
                    <paper-checkbox checked='${hardness}'>Bodemvlakken</paper-checkbox>
                </vaadin-vertical-layout>
                <paper-material class='pricetag'>
                    <div class='price'><span  style="display:inline-block">€ ${total}</span> <paper-badge icon="info" label="Prijsopbouw"></paper-badge></div>
                    <p>${numItems===0?"Nog geen gebied geselecteerd":numItems + "gebieden geselecteerd"}</p>
                </paper-material>
                <paper-button class='help'>Hulp nodig?</paper-button>
            </div>
            <span slot='footer'>
              <paper-button>BESTELLEN</paper-button>
            </span>

          </ui-panel>
          
          <ui-sheet on-close='${_ => this._activeSheet = 0}' hidden='${_activeSheet !== 1}'>
            <app-sheet1 on-selection='${this.selectionHandler}' ></app-sheet1>
          </ui-sheet>
          <ui-sheet hidden='${_activeSheet !== 2}'>Sheet2</ui-sheet>
          
        </ui-panel-sheets>
        `;
  }
  static get properties() {
    return {
        _activeSheet: Number,
        buildings:  Boolean,
        breaklines: Boolean,
        hardness: Boolean,
        selectedHokken: Array,
        hokken: Array,
        numItems: Number,
        total: Number
		
    };
  }
  constructor() {
    super();
    this._activeSheet = 1;
    this.buildings = true;
    this.breaklines = true;
    this.hardness = true;
    this.numItems = 0;
    this.total = 0;
  }
  zoomTo(coords){
    this.shadowRoot.querySelector('#map').zoomTo(coords);
  }
  _stateChanged(state) {
    this.value = state.counter.value;
  }
}

window.customElements.define('demo-app', DemoApp);