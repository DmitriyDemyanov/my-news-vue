export default {
  namespaced: true,
  state: {
    list: [
      {
        dt: 1667822400,
        main: {
          temp: 6.71,
          feels_like: 3.77,
          temp_min: 6.71,
          temp_max: 8.25,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1010,
          humidity: 92,
          temp_kf: -1.54,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.36,
          deg: 173,
          gust: 8.19,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-11-07 12:00:00',
      },
      {
        dt: 1667833200,
        main: {
          temp: 6.85,
          feels_like: 4.44,
          temp_min: 6.85,
          temp_max: 7.13,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1010,
          humidity: 80,
          temp_kf: -0.28,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        clouds: {
          all: 83,
        },
        wind: {
          speed: 3.45,
          deg: 159,
          gust: 7.91,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-11-07 15:00:00',
      },
      {
        dt: 1667844000,
        main: {
          temp: 6.02,
          feels_like: 3.42,
          temp_min: 5.67,
          temp_max: 6.02,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1010,
          humidity: 73,
          temp_kf: 0.35,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        clouds: {
          all: 54,
        },
        wind: {
          speed: 3.47,
          deg: 165,
          gust: 8.44,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-11-07 18:00:00',
      },
    ]
  },
  getters: {
    forecastList({ list }) {
      return list;
    },
  },
  mutations: {},
  actions: {},
  
};
