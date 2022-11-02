<template>
  <BContainer>
    <h3>Movies</h3>
    <NewsList />
    <div>Pagination</div>
  </BContainer>
</template>

<script>
import NewsList from './components/NewsList.vue';

export default {
  name: 'App',
  components: {
    NewsList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
