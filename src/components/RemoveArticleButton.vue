<template>
<div class="RemoveArticleButton">
  <a @click="$store.commit('excludeArticle',id)">
  <transition name="rm-btn-fade" mode="out-in">
    <div v-if="!show" :key="id+'blue'">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
        class="svg-inline--fa fa-times fa-w-11 size_rm"
        role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512">
        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
        </path>
      </svg>
    </div>
    <div v-else :key="id+'red'">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
        class="svg-inline--fa red fa-times fa-w-11 size_rm"
        role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512">
        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
        </path>
      </svg>
    </div>
  </transition>
  </a>
</div>
</template>

<script>
export default {
  name: 'RemoveArticleButton',
  props: {
    id: Number,
    show: Boolean
  },
  methods: {
    other () {
      this.show = !this.show
    }
  }
}
</script>

<style>
.red {
  color: red;
}
.rm-btn-fade-enter-active,
.rm-btn-fade-leave-active {
  transition: opacity .1s;
}
.rm-btn-fade-leave-active,
.rm-btn-fade-enter-active {
  animation: rotate-center  .2s;
}
.RemoveArticleButton {
  display: inline-block;
  float: left;
}
.size_rm {
  width: 16px;
}

@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
</style>
