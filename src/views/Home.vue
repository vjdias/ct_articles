<template>
  <div id='home' class='container'>
    <h3>{{ $route.name }}</h3>
    <hr>
    <ListArticles></ListArticles>
  </div>
</template>

<script>
import ListArticles from '@/components/ListArticles'
export default {
  name: 'Home',
  components: {
    ListArticles
  }
}
</script>
