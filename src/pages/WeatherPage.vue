<template>
  <div>
    <h3>Weather</h3>
    <WeatherList/>
  </div>
</template>



<script>
import WeatherList from '@/components/WeatherList';
import { mapActions } from 'vuex';

export default {
  name: 'WeatherPage',
  components: {
    WeatherList,
  },
  methods: {
    ...mapActions('weather', ['fetchWeather'])
  },
  created() {
    this.fetchWeather();
  }
}
</script>



<style scoped>
</style>

