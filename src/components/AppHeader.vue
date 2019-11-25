<template>
<b-navbar center toggleable="lg" type="light" variant="dark">
  <div class="container">
    <b-navbar-brand href="#">
      <router-link class="nav-link" to="/">Geek News</router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link class="nav-link" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link class="nav-link" to="/favorites">Favorites</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link class="nav-link" to="/trash">Trash</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </div>
</b-navbar>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.center {
  margin-bottom: 20px;
}
.navbar {
  padding:2px;
  margin-bottom: 20px;
  z-index: 10;
}
.bg-dark {
  background-color: #6ba8a9 !important;
}
.navbar-light .navbar-nav .nav-link {
  color: #000;
  margin-left: 1rem;
}
</style>
