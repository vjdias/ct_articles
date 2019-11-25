import Vue from 'vue'
import Router from 'vue-router'
import ArticleView from '@/views/ArticleView'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Latest News',
      component: Home
    },
    {
      path: '/anews/:id',
      name: 'Article',
      component: ArticleView
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Home
    },
    {
      path: '/trash',
      name: 'Trash',
      component: Home
    }
  ]
})
