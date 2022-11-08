<template>
  <div>
    <h3>Weather</h3>
    <WeatherList/>
  </div>
</template>



<script>
import WeatherList from '@/components/WeatherList';

  export default {
    name: 'WeatherPage',
    components: {
      WeatherList,
    }
  }
</script>



<style scoped>
</style>

