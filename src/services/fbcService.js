const apiAddress = 'http://fbc.pionier.net.pl';
const searchUrl = apiAddress + '/index/select?q=';
const rowsNum = 3;
const resourceUrl = apiAddress + '/search#q=id:';
const thumbnailUrl = apiAddress + '/thumbnails/';

//lang

export const updateData = (query, that) => {
  fetch(`${searchUrl}${query}&rows=${rowsNum}&fl=dc_title%2Cdcterms_alternative%2Cdc_creator%2Cdc_contributor%2Cid%2Cdc_date&wt=json`)
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
      updateDataList(query, that, data.response);
    })
    .catch(function(error) {
      console.log(`Error: ${error.message}`);
    });
};

const prepareTemplate = (query, that) => {
  that.$container.insertAdjacentHTML(
      'afterbegin',
      `<div class="chcontext__logo">
          <img src="${apiAddress}/images/base/logo.svg?_debugResources=y&n=1446630144466" />
          <h3 class="chcontext__logo-name">Federacja Bibliotek Cyfrowych</h3>
      </div>`
    );
};

const updateDataList = (query, that, data) => {
    that.numFound = data.numFound;

    if (data.docs.length) {
      that.listData = data.docs.map(doc =>{
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
    updateListDom(query, that);
    updateTotalDom(query, that);
};

const updateListDom = (query, that) => {
  if (!!that.listData && that.listData.length) {
    let html = "<ul class=\"chcontext__data-list\">";

    that.listData.forEach(function(item, index) {
      html += "<li class=\"chcontext__data-list__item\">";

      if (!!item.link) {
        html += `<a class=\"chcontext__data-list__item\" href=${item.link}>`;
      }

      if (!!item.imgLink) {
        html += `<img src=${item.imgLink} />`;
      }

      if (!!item.title) {
        html += `<div class=\"chcontext__data-list__item\">${item.title}</div>`;
      }

			if (!!item.author) {
        html += `<div class=\"chcontext__data-list__item\">${item.author}</div>`;
      }

			if(!!item.date){
        html += `<div class=\"chcontext__data-list__item\">${item.date}</div>`;
			}

      if (!!item.link) {
        html += `</a>`;
      }
      html += `</li>`;
    });

    html += "</ul>";

    that.$container.insertAdjacentHTML(
        'beforeend',
        html
      );
  }
};

const updateTotalDom = (query, that) => {
  let html = `<div>`;
  html += `<a href="${searchUrl}${query}">`;
  html += `Wszystkie wyniki wyszukiwania`;
  html += `<span> (${that.numFound})</span>`;
  html += `</a>`;
  html += `</div>`;

  that.$container.insertAdjacentHTML(
      'beforeend',
      html
    );
};

export const createServiceFBC = (query, that) => {
  prepareTemplate(query, that);
  updateData(query, that);
};
