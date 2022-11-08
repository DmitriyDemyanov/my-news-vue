<template >
  <div>

    <template v-if="forecastList.length">
      <h2>Weather Kyiv </h2>
      <BCol cols="3" v-for="(item, idx) in forecastList" :key="`idx-${idx}`">
        
        <WeatherListItem :forecast="item"/>
      </BCol>

    </template>

    <template v-else>
      <div class="text-center">
        <b-spinner label=":)"></b-spinner>
        <b-spinner type="grow" label=":)"></b-spinner>
        <b-spinner variant="primary" label=":)"></b-spinner>
        <b-spinner variant="primary" type="grow" label=":)"></b-spinner>
        <b-spinner variant="success" label=":)"></b-spinner>
        <b-spinner variant="success" type="grow" label=":)"></b-spinner>
      </div>

    </template>
  </div>

</template>


<script>
import { mapGetters } from 'vuex';
import WeatherListItem from '@/components/WeatherListItem';


export default {
  name: 'WeatherList',
  computed: {
    ...mapGetters('weather', ['forecastList'])
  },
  components: {
    WeatherListItem,
  }
}

</script>



<style scoped>

</style>