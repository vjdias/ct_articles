<template>
  <div class="container">
    <div class="art-title">
      <h2>{{ article.title }}</h2>
    </div>
    <div class="art-info">
      <span> {{ article.pubDate }}
        <a href="#"> {{ article.author }} </a>
      </span>
      <div class="original">
        <a :href="article.link">See the original article here</a>
      </div>
    </div>
    <hr>
    <div>
      <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
    </div>
    <div class="media">
      {{ article.text }}
    </div>

    <b-media style="media" right-align vertical-align="center">
      <template v-slot:aside>
        <b-img blank blank-color="#ccc" width="80" alt="placeholder"></b-img>
      </template>
      <h5 class="mt-0 mb-1">Media object</h5>
        <div class="art-text">
          {{ article.text }}
        </div>
    </b-media>
  </div>
</template>

<script>
export default {
  name: 'ArticleView',
  computed: {
    article () {
      return this.$store.state.listArticles[this.$route.params.id] || {}
    }
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchList').then(listArticles => {
      this.loading = false
    })
  }
}
</script>

<style>
.media {
  margin-top: 20px;
  text-align: justify;
}
</style>
