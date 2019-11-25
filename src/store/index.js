import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    listArticles: [],
    reload: true
  },
  mutations: {
    setListArticles (state, listArticles) {
      state.listArticles = listArticles
    },
    changeFavorite (state, artId) {
      state.listArticles[artId].favorite = !state.listArticles[artId].favorite
    },
    excludeArticle (state, artId) {
      state.listArticles[artId].delete = !state.listArticles[artId].delete
      console.log(state.listArticles[artId].delete)
    },
    setAll (state, payload) {
      state.listArticles = payload.listArticles
    }
  },
  actions: {
    fetchList ({ commit }) {
      if (this.state.reload) {
        this.state.reload = false
        return client
          .fetchList()
          .then(listArticles => commit('setListArticles', listArticles))
      }
    }
  }
})
