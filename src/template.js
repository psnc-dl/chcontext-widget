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
    }

    .chcontext__data-list {
      list-style: none;
      padding: 0;
      margin: 5px;
    }

    .chcontext__data-list__item {
      border: solid 1px #dadada;
      border-radius: 5px;
      margin: 10px 0;
      display: inline-block;
      width: 100%;
    }

    /* THEME CODE */
    .chcontext__container.violet {
      border-color: #6f4897;
    }

  </style>

  <div class="chcontext__container">
  </div>`;

export default template;
