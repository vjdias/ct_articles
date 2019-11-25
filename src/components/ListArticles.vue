<template>
<div class="bg-faded">
  <ul v-if="$route.name === 'Favorites'" class='container'>
    <li v-for='(item, x) in articles'
    :key='x' class="text-left">
    <transition name="bounce">
      <ItemArticle v-if="item.favorite" v-show="!item.delete|!item.favorite" :key="item.id+'fav'" :article='item'/>
    </transition>
    </li>
  </ul>
  <ul v-if="$route.name === 'Trash'" class='container'>
    <li v-for='(item, x) in articles'
    :key='x' class="text-left">
      <transition name="bounce">
        <ItemArticle  v-if="item.delete" v-show="item.delete" :key="item.id+'del'" :article='item'/>
      </transition>
    </li>
  </ul>
  <ul v-if="$route.name === 'Latest News'" class='container'>
    <li v-for='(item, x) in articles'
    :key='x' class="text-left">
      <transition name="bounce">
        <ItemArticle v-show="!item.delete" :key="item.id+'del'" :article='item'/>
      </transition>
    </li>
  </ul>
</div>
</template>

<script>
import ItemArticle from '@/components/ItemArticle'

export default {
  name: 'ListArticles',
  prop: {
    articles: Object
  },
  components: {
    ItemArticle
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    articles () {
      return this.$store.state.listArticles
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

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>
