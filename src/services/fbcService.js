import {searchProviders, apiAddress, dictionary, loading, magnifier, error} from '../constants.js';

const selectUrl = apiAddress + '/index/select?q=';
const searchUrl = apiAddress + '/search/query?q=';
const rowsNum = 3;
const resourceUrl = apiAddress + '/search#q=id:';
const thumbnailUrl = apiAddress + '/thumbnails/';

export const updateData = (that) => {
  loadingTemplate(that);

  fetch(`${selectUrl}${encodeURIComponent(that.$query)}&rows=${rowsNum}&fl=dc_title%2Cdcterms_alternative%2Cdc_creator%2Cdc_contributor%2Cid%2Cdc_date&wt=json`)
    .then(response => {
      if (response.ok) {
        return Promise.resolve(response);
      }
      else {
        return Promise.reject(new Error('Failed to load'));
      }
    })
    .then(response => response.json()) // parse response as JSON
    .then(data => {
      // success
      resetTemplate(that);
      updateDataList(that, data.response);
    })
    .catch(function(error) {
      resetTemplate(that);
      errorTemplate(that);
      console.log(`Error: ${error.message}`);
    });
};

const loadingTemplate = (that) => {
  let html = `<div class="chcontext__loading" />`;
  html += `<img class="chcontext__loading__img" src=${loading} />`;
  html += `</div>`;
  that.$container.querySelector('.chcontext__results__container').innerHTML = html;
};

const noResultsTemplate = (that) => {
  // let html = `<div class="chcontext__no-results">`;
  // html += `<img class="chcontext__no-results__img" src="${magnifier}" />`;
  // html += `<p class="chcontext__no-results__text">${dictionary[that.$lang].noResults}</p>`;
  // html += `</div>`;
  //
  // that.$container.querySelector('.chcontext__results__container').innerHTML = html;
};

const errorTemplate = (that) => {
  let html = `<div class="chcontext__error">`;
  html += `<img class="chcontext__error__img" src="${error}" />`;
  html += `<p class="chcontext__error__text">${dictionary[that.$lang].error}</p>`;
  html += `<button class="chcontext__reload" type="button">${dictionary[that.$lang].reload}</button>`;
  html += `</div>`;

  that.$container.querySelector('.chcontext__results__container').innerHTML = html;
  that.$container.querySelector('.chcontext__reload').addEventListener('click', function() { updateData(that) });
};

const resetTemplate = (that) => {
  that.$container.querySelector('.chcontext__results__container').innerHTML = '';
};

const prepareTemplate = (that) => {
  const providerName = searchProviders.filter(provider => provider.name === that.$page)[0].label[that.$lang];

  that.$container.insertAdjacentHTML(
      'afterbegin',
      `<div class="chcontext__logo">
          <a href=${apiAddress} target="_blank">
            <img class="chcontext__logo__img" src="${apiAddress}/images/base/logo.svg?_debugResources=y&n=1446630144466" />
            <h4 class="chcontext__logo-name">${providerName}</h4>
          </a>
      </div>`
    );

  that.$container.insertAdjacentHTML(
      'beforeend',
      `<div class="chcontext__results__container">
      </div>`
    );

  that.$container.querySelector('.chcontext__logo__img').addEventListener('error', function() { this.style="display: none" });
};

const updateDataList = (that, data) => {
    that.$numFound = data.numFound;

    if (data.docs.length) {
      that.$listData = data.docs.map(doc =>{
        let title = doc.dc_title;
				if (title !== undefined && title instanceof Array) {
					title = title[0];
				}

        let author = doc.dc_creator;
				if (author !== undefined && author instanceof Array) {
					author = author[0];
				}

			  let date = doc.dc_date;
				if (date !== undefined && date instanceof Array) {
					date = date[0];
				}

        return {
					link: resourceUrl + doc.id,
					imgLink: thumbnailUrl + doc.id,
					title: title,
					author: author,
					date: date
				};}
      );
    }
    updateListDom(that);
};

const updateListDom = (that) => {
  if (!!that.$listData && that.$listData.length) {
    let html = "<ul class=\"chcontext__data-list\">";

    that.$listData.forEach(function(item, index) {
      html += "<li class=\"chcontext__data-list__item\">";

      if (!!item.link) {
        html += `<a target="_blank" class=\"chcontext__data-list__link\" href=${item.link}>`;
      }

      if (!!item.imgLink) {
        html += `<div class=\"chcontext__data-list__item--left\">`;
        html += `<img class=\"chcontext__data-list__item__img\" src=${item.imgLink} onerror="this.style='display: none;'" />`;
        html += `</div>`;
      }

      html += `<div class=\"chcontext__data-list__item--right\">`;

      if (!!item.title) {
        html += `<div class=\"chcontext__data-list__item__text title\">${item.title}</div>`;
      }

			if (!!item.author) {
        html += `<div class=\"chcontext__data-list__item__text author\"><span>${item.author}</span></div>`;
      }

			if(!!item.date){
        html += `<div class=\"chcontext__data-list__item__text date\"><span>${item.date}</span></div>`;
			}

      html += `</div>`;

      if (!!item.link) {
        html += `</a>`;
      }
      html += `</li>`;
    });

    html += "</ul>";

    that.$container.querySelector('.chcontext__results__container').insertAdjacentHTML(
        'beforeend',
        html
      );

    if (that.$numFound > 3) {
      updateTotalDom(that);
    }
  } else {
    noResultsTemplate(that);
  }
};

const updateTotalDom = (that) => {
  let html = `<div>`;
  html += `<a target="_blank" href="${searchUrl}${that.$query}" class=\"chcontext__total__link\">`;
  html += `${dictionary[that.$lang].seeMore}`;
  html += `<span> (${that.$numFound})</span>`;
  html += `</a>`;
  html += `</div>`;

  that.$container.querySelector('.chcontext__results__container').insertAdjacentHTML(
      'beforeend',
      html
    );
};

export const createServiceFBC = (that) => {
  prepareTemplate(that);
  updateData(that);
};
