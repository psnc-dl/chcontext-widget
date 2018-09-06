import template from './template.js';
import {createServiceFBC, updateData} from './services/fbcService.js';
import {defaultLang, searchProviders, availableLangs, dictionary} from './constants.js';
import error from './icons/error.svg';

(function() {
  class DateWidget extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
      this.createShadowRoot().innerHTML = template;
      this.$container = this.shadowRoot.querySelector('.chcontext__container');
      this.$lang = availableLangs.includes(this.getAttribute('lang')) ? this.getAttribute('lang') : defaultLang;
      this.$theme = this.getAttribute('theme');
      this.$query = this.getAttribute('query');
      this.$page = this.getAttribute('page');

      this.updateTheme();

      const isValidProvider = searchProviders.filter(provider => provider.name === this.$page).length > 0;
      if (!this.$page || !isValidProvider) {
        this.showError();
        return;
      }

      this.createService();
    };

    // Fires when an instance was inserted into the document.
    attachedCallback() { };

    // Fires when an attribute was added, removed, or updated.
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

  document.registerElement('date-widget', DateWidget);
})();
