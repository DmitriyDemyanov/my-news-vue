<template>
  <div class="mb-5">
    <div>{{ forecastDate }}</div>
    <div> Температура сегодня {{ forecastTemp }}&#8451;</div>
    <div>{{ calculateTemp(forecast.main.feels_like) }}&#8451;</div>
  </div>
</template>


<script>
export default {
  name: 'WeatherListItem',
  props: {          // то что получает
    forecast: {
      type: Object,
      required: true,
    },
  },
  computed: {
    forecastDate() {
      const date = new Date(this.forecast.dt * 1000);
      return date;
    },
    forecastTemp() {
      return Math.round(this.forecast.main.temp);
    }
  },
  methods: {
    calculateTemp(temp) {
      return `Feels Like ${Math.round(temp)}`
    }
  },
}
</script>


<style scoped>

</style>