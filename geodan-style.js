import { html } from '@polymer/lit-element';

export const geodanStyle = html`
<style>
   :host {
                display: block;
                --geodan-regular-font: 'Lato';
                --geodan-light-font: 'Lato';
                --geodan-heading1-fontsize: 36px;
                --geodan-heading2-fontsize: 24px;
                --geodan-heading3-fontsize: 17px;
                --geodan-light-fontweight: 300;
                --geodan-color: #333333;

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
            paper-button.geodan {
                background:var(--geodan-button-normal);
                color:white;
                --paper-button-ink-color: var(--geodan-button-normal);
                --paper-button-disabled: var(--geodan-button-disabled);
            }
            paper-button.geodan:hover {
                background:var(--geodan-button-hover);
            }

            paper-button.geodan a{
                color: white;
            }
            paper-icon-button {
                color: var(--geodan-button-normal);
                --paper-icon-button-ink-color: var(--geodan-button-normal);
            }
            p {
                font-family: var(--geodan-regular-font);
            }
            a {
                text-decoration: none;
                color: var(--geodan-color);
            }
            paper-checkbox {
                --paper-checkbox-unchecked-color: var(--geodan-checkbox-unchecked);
                --paper-checkbox-unchecked-ink-color: var(--geodan-checkbox-checked);
                --paper-checkbox-checked-color: var(--geodan-checkbox-checked);
                --paper-checkbox-checked-ink-color: var(--geodan-checkbox-unchecked);
                --paper-checkbox-checkmark-color: white;
            }
  </style>
`;