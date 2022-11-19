<template>
  <BContainer>
    <div class="mb-3 mt-3">
      <router-link class="p-2" to="/">Главная</router-link>
      <router-link class="p-2" to="/news">Новости</router-link>
      <router-link class="p-2" to="/weather">Weather</router-link>
      <router-link class="p-2" to="/tickets">Билеты</router-link>
      <router-link class="p-2" to="/laboratory">Лаборатория</router-link>
    </div>
    <router-view class="abra-cad"></router-view>
  </BContainer>
</template>

<script>
export default {
  name: 'App'
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
