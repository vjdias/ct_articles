<template>
<div id="app">
  <AppHeader></AppHeader>
  <transition name="page" mode="out-in">
    <router-view/>
  </transition>
  <AppFooter></AppFooter>
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  mounted () {
    window.addEventListener('storage', e => {
      if (e.key !== 'vuex') return
      // exit if no change
      if (e.newValue === JSON.stringify(this.$store.state)) {
        return
      }
      const persistedData = JSON.parse(e.newValue)
      this.$store.commit('setAll', persistedData)
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
html, body {
  font-family: 'Open Sans', sans-serif;
  background-color: #e5dfdf;
  color: #3c3d47;
}

ul {
  list-style-type: none;
  padding-left:0rem;
}

li, a {
    text-decoration: none;
    color: #000;
}

dt {
  font-weight: 600;
}

@include media-breakpoint-up(sm) {
  #app {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  #app {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  #app {
    font-size: 1.6rem;
  }
}

media (min-width: 768px)
.container {
    max-width: 720px;
}

@media only screen and (max-width: 767px) {
   h1 {
      font-size: 3em;
   }
   h2 {
      font-size: 2em;
   }
   .col-sm-3,.col-sm-9 {
      padding-left: 0;
   }
   .container {
     max-width: 780px;
     text-align: justify;
   }
}
</style>
