let template =
 `<style>
    @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);

    .chcontext__container {
      background-color: #FFF;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
      border: 1px solid #ddd;
      position: relative;
      min-height: 100px;
      font-family: 'Roboto Condensed', sans-serif;
      margin: 10px 0;
      transition: border .2s ease-in-out;
      font-family: tahoma, arial, helvetica, sans-serif;
      font-size: 14px;
      width: 500px;
      padding: 15px;
      text-align: center;
    }

    .chcontext__data-list {
      list-style: none;
      padding: 0;
      text-align: left;
      width: 100%;
    }

    .chcontext__data-list__item {
      border: solid 1px #dadada;
      margin: 5px 0;
      display: block;
      padding: 10px;
      border-radius: 4px;
    }

    .chcontext__data-list__item:hover {
      background-color: #dadada;
    }

    .chcontext__data-list__item:hover .chcontext__data-list__link {
      color: #fff;
    }

    .chcontext__data-list__item--left {
      width: 50px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .chcontext__data-list__item--right {
      flex: 1;
      padding: 0 10px;
    }

    .chcontext__data-list__item__img {
      max-width: 100%;
      max-height: 70px;
    }

    .chcontext__data-list__item__text {
      margin-bottom: 1px;
    }

    .chcontext__data-list__item__text.title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 3px;
    }

    .chcontext__data-list__item__text.author span {
      font-style: italic;
    }

    .chcontext__data-list__item__text.date {
      color: #444444;
      font-size: 13px;
    }

    .chcontext__data-list__link {
      display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
      display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
      display: -ms-flexbox;      /* TWEENER - IE 10 */
      display: -webkit-flex;     /* NEW - Chrome */
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .chcontext__data-list__link:hover {
    }

    .chcontext__total__link {
      color: #6f4897;
      font-size: 15px;
      font-weight: bold;
    }

    .chcontext__total__link:hover {
      color: #563d7c;
    }

    /* THEME CODE */
    .chcontext__container.violet {
      border-color: #6f4897;
    }

    .chcontext__container.violet .chcontext__data-list__link {
      color: #6f4897;
    }

    .chcontext__container.violet .chcontext__data-list__item {
      border-color: #6f4897;
    }

    .chcontext__container.violet .chcontext__data-list__item:hover {
      background-color: #6f4897;
    }

    .chcontext__container.violet .chcontext__data-list__item:hover .chcontext__data-list__link,
    .chcontext__container.violet .chcontext__data-list__item:hover .chcontext__data-list__item__text.date {
      color: #fff;
    }

  </style>

  <div class="chcontext__container">
  </div>`;

export default template;
