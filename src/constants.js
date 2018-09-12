export const defaultQuery = "title";

export const dictionary = {
  pl: {
    "seeMore": "Więcej wyników",
    "error": "Wystąpił błąd",
    "reload": "Załaduj ponownie",
    "noResults": "Nie znaleziono wyników",
    "poweredBy": "Dostarczone przez",
    "titleLabel": "Tytuł",
    "authorLabel": "Autor",
    "dateLabel": "Data"
  },
  en: {
    "seeMore": "See more results",
    "error": "Error",
    "reload": "Reload",
    "noResults": "Results not found",
    "poweredBy": "Powered by",
    "titleLabel": "Title",
    "authorLabel": "Author",
    "dateLabel": "Date"
  }
};

export const searchProviders = [
	// {name: "Europeana", label: ""},
	// {name: "DPLA", label: ""},
	{name: "FBC", label: {pl: "Federacja Bibliotek Cyfrowych", en: "FBC"}}
];

export const defaultLang = "pl";
export const availableLangs = ["pl", "en"];

export const apiAddress = 'http://fbc.pionier.net.pl';
export const apiAddressNukat = `${apiAddress}/pro/nukat-plugin`;

export const loading = `${apiAddressNukat}/25cfd9d8fb2fd564b7b895b002a8efee.gif`;
export const magnifier = `${apiAddressNukat}/8c26a5fa4c4d5c403be9dc2055deaebe.svg`;
export const error = `${apiAddressNukat}/92c2349cce04f147afcf108c8dd8437a.svg`;
