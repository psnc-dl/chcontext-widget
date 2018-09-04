import template from './template.js';
import {createServiceFBC, updateData} from './services/fbcService.js';
//available pages
(function() {
  class DateWidget extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
      this.createShadowRoot().innerHTML = template;
      this.$container = this.shadowRoot.querySelector('.chcontext__container');
      this.updateTheme(this.getAttribute('theme'));
      this.createService(this.getAttribute('query'), this.getAttribute('page'));
    };

    // Fires when an instance was inserted into the document.
    attachedCallback() { console.log('widget loaded')};

    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
          case "theme":
              this.updateTheme(newVal);
              break;
          case "query":
              updateData(newVal, this);
              break;
          case "page":
              createService(this.getAttribute('query'), newVal);
              break;
      }
    };

    createService(query, page) {
      switch (page) {
          case "FBC":
              createServiceFBC(query, this);
              break;
          default:
              break;
      }
    };

    updateTheme(theme) {
        var val = "violet";
        if (["violet"].indexOf(theme) > -1) {
            val = theme;
        }
        this.$container.className = "chcontext__container " + val;
    };
  }

  document.registerElement('date-widget', DateWidget);
})();
