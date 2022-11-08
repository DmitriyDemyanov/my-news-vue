<template>
  <div>
    <BRow>

      <template v-if="articlesList.length">
        <BCol cols="3" v-for="(item, idx) in articlesList" :key="`idx-${idx}`">
          <NewsListItem :article="item" />
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

    </BRow>

  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import NewsListItem from '@/components/NewsListItem';

export default {
  name: 'NewsList',
  components: {
    NewsListItem,
  },
  computed: {
    ...mapGetters('news', ['articlesList']),
  },
  methods: {
    ...mapActions('news', ['fetchArticle'])
  },
  created() {
    this.fetchArticle();
  }

};
</script>





<style scoped>

</style>