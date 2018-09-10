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
      transition: border .2s ease-in-out;
      font-family: tahoma, arial, helvetica, sans-serif;
      font-size: 14px;
      width: 100%;
      padding: 15px;
      text-align: center;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box
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
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .chcontext__data-list__item--right {
      flex: 1;
      padding-right: 10px;
    }

    .chcontext__data-list__item__img {
      max-width: 70px;
      max-height: 70px;
      width: 100%;
      margin-right: 10px;
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

    .chcontext__loading {
      padding: 10px 0;
    }

    .chcontext__loading__img {
      height: 30px;
    }

    .chcontext__data-list__link:hover {
    }

    .chcontext__total__link {
      color: #fff !important;
    }

    .chcontext__no-results,
    .chcontext__error {
      margin: 40px 0 10px;
    }

    .chcontext__no-results__img,
    .chcontext__error__img {
      height: 50px;
    }

    .chcontext__logo a {
      text-decoration: none;
    }

    .chcontext__reload {
      cursor: pointer;
    }

    /* THEME CODE */
    .chcontext__container.violet {
      border-color: #6f4897;
    }

    .chcontext__container.violet .chcontext__error__text,
    .chcontext__container.violet .chcontext__no-results__text {
      color: #6f4897;
      font-size: 14px;
    }

    .chcontext__container.violet .chcontext__logo-name {
      color: #6f4897;
      font-weight: normal;
      margin: 9px 0;
    }

    .chcontext__container.violet .chcontext__logo__img {
      height: 50px;
    }

    .chcontext__container.violet .chcontext__total__link,
    .chcontext__container.violet .chcontext__reload {
      background-image: -webkit-linear-gradient(top, #6f4897 0%, #563d7c 100%);
      background-image: -o-linear-gradient(top, #6f4897 0%, #563d7c 100%);
      background-image: -webkit-gradient(linear, left top, left bottom, from(#6f4897), to(#563d7c ));
      background-image: linear-gradient(to bottom, #6f4897 0%, #563d7c 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
      filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
      background-repeat: repeat-x;
      border-color: #563d7c;
      color: #ffffff;
      padding: 9px 12px;
      font-size: 14px;
      border-radius: 4px;
      text-decoration: none;
      display: inline-block;
    }

    .chcontext__container.violet .chcontext__total__link:hover,
    .chcontext__container.violet .chcontext__reload:hover {
      background: #563d7c;
      border-color: #563d7c;
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
      color: #fff !important;
    }

  </style>

  <div class="chcontext__container">
  </div>`;

export default template;
