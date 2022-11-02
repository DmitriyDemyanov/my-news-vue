export default {
  namespaced: true,
  state: {
    list: [
      {
        source: {
          id: null,
          name: "Www.rbc.ua",
        },
        author: "Сергей Новиков",
        title:
          "Із фітнес-тренера в дорожники. Як подруга Резніченка отримує мільярди на будівництво - РБК-Украина",
        description:
          "Фірма фітнес-тренера Яни Хланти отримала 1,5 мільярда гривень на ремонт і утримання доріг Дніпропетровської області. Журналісти з&#39;ясували, що посприяв цьому керівник Дніпропетровської ОВА Валентин Резниченко.",
        url: "https://www.rbc.ua/rus/news/kompaniya-blizkoyi-podrugi-reznichenka-otrimala-1667380950.html",
        urlToImage: "https://www.rbc.ua/static/img/_/d/_dp_gov_ua_1300x820.jpg",
        publishedAt: "2022-11-02T09:45:30Z",
        content:
          '- 1,5 . \', .\r\n-""" ".\r\n, , , - 2,3 .\r\n 1,5 " ", ( - Human).\r\n , , .\r\n , - . " ". .\r\n"" , , . .\r\n , , , .\r\n "", " ".\r\n , " " 2015 . , .\r\n . , "" "" .\r\n«-» ( ), - https://www.rbc.ua/ukr.\r\n, . , «-» Cre… [+107 chars]',
      },
      {
        source: {
          id: null,
          name: "Www.rbc.ua",
        },
        author: "bbbbbbbbbbbbb",
        title:
          "aaaaaaaaaaaaa",
        description:
          "ccccccccccccccccccccccccccccc",
        url: "https://www.rbc.ua/rus/news/kompaniya-blizkoyi-podrugi-reznichenka-otrimala-1667380950.html",
        urlToImage: "https://www.rbc.ua/static/img/_/d/_dp_gov_ua_1300x820.jpg",
        publishedAt: "2022-11-02T09:45:30Z",
        content:
          'ddddddddddddddddddd',
      },
    ],
  },
  getters: {
    articlesList({ list }) {
      return list;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
};
