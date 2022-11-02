<template>
  <div>
    <BRow>
      <BCol cols="4" v-for="(item, idx) in articlesList" :key="`idx-${idx}`">
        {{item.title}}
      </BCol>
    </BRow>

  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NewsList',
  computed: {
    ...mapGetters('news', ['articlesList']),
  }
};
</script>





<style scoped>

</style>