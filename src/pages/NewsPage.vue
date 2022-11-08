<template>
  <div>
    <h3>News</h3>
    <NewsList />
    <div>Pagination</div>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList';

export default {
  name: 'NewsPage',
  components: {
    NewsList
  }
}
</script>

<style></style>