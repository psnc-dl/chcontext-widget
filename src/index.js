import 'whatwg-fetch';
import template from './template.js';
import {createServiceFBC, updateData} from './services/fbcService.js';
import {defaultLang, searchProviders, availableLangs, dictionary} from './constants.js';
import error from './icons/error.svg';

(function() {
  let tmpl = document.createElement('template');
  tmpl.innerHTML = template;

  class ChcontextWidget extends HTMLElement {
    constructor() {
      super();

      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

    connectedCallback() {
      this.$titleQuery = document.getElementById('title') ? document.getElementById('title').innerHTML : undefined;
      this.$container = this.shadowRoot.querySelector('.chcontext__container');
      this.$lang = availableLangs.includes(this.getAttribute('lang')) ? this.getAttribute('lang') : defaultLang;
      this.$theme = this.getAttribute('theme');
      this.updateTheme();

      if (!this.$titleQuery) {
        this.showError();
        return;
      }

      this.$query = this.$titleQuery.includes('/') ? this.$titleQuery.split('/')[0] : this.$titleQuery.includes(';') ? this.$titleQuery.split(';')[0] : this.$titleQuery;
      this.$page = this.getAttribute('page');

      const isValidProvider = page => searchProviders.filter(provider => provider.name === page).length > 0;

      if (!this.$page || !isValidProvider(this.$page)) {
        this.showError();
        return;
      }

      this.createService();
    };

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case "theme":
          this.$theme = newVal;
          this.updateTheme(newVal);
          break;
        case "query":
          this.$query = newVal;
          updateData(this);
          break;
        case "page":
          this.$page = newVal;
          createService();
          break;
      }
    };

    createService() {
      switch (this.$page) {
          case "FBC":
              createServiceFBC(this);
              break;
          default:
              break;
      }
    };

    updateTheme() {
        var val = "violet";
        if (["violet"].indexOf(this.$theme) > -1) {
            val = this.$theme;
        }
        this.$container.className = "chcontext__container " + val;
    };

    showError() {
      console.log('config error');

      let html = `<div class="chcontext__error">`;
      html += `<img class="chcontext__error__img" src="${error}" />`;
      html += `<p class="chcontext__error__text">${dictionary[this.$lang].error}</p>`;
      html += `</div>`;
      this.$container.innerHTML = html;
    };
  }
  customElements.define('chcontext-widget', ChcontextWidget);
})();
