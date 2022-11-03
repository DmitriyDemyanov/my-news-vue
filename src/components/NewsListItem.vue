<template>
  <div class="news-item mb-5">

    <div class="news-info-wrap" :style="`background-image: url(${articleBg});`">

      <div class="news-item-info">
        <a :href="article.source.name">{{ article.source.name }}</a>
        <div class="news-title hover-card fz20"> {{ article.title }} </div>
        <div class="news-description hover-card"> {{ article.description }} </div>
        <div class="news-author hover-card"> {{ article.author }} </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NewsListItem",
  data() {
    return {
      defaultUrl: 'https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    };
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    articleBg() {
      return this.article.urlToImage || this.defaultUrl;
    },
  },

}

</script>



<style scoped>
.news-info-wrap {
  height: 400px;
  width: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  padding: 10px ;
}

.news-info-wrap:hover .news-item-info .hover-card {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin-bottom: 30px;
}
</style>