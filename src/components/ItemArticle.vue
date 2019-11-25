<template>
<div class="">
  <dl class="row">
    <dt class="col-sm-3">
      {{ article.pubDate.substring(4, 22)}}
      <div class="actions">
        <AddLikeButton v-if="!article.delete" :id="article.id" :show="article.favorite"/>
        <div v-if="!article.favorite" class="btn-rm">
          <RemoveArticleButton :id="article.id" :show="article.delete"/>
        </div>
      </div>
    </dt>
    <dd class="col-sm-9">
      <router-link :to="{ name: 'Article', params: { id: article.id }}">{{ article.title }}</router-link>
    </dd>
  </dl>
</div>
</template>

<script>
import AddLikeButton from '@/components/AddLikeButton'
import RemoveArticleButton from '@/components/RemoveArticleButton'

export default {
  name: 'ItemArticle',
  props: {
    article: Object
  },
  components: {
    AddLikeButton,
    RemoveArticleButton
  }
}
</script>

<style>
@media (min-width: 576px) {
.col-sm-3 {
  -webkit-box-flex: 0;
  max-width: 114px;
  padding-right: 0px;
  margin-left: 3px;
  }
}

.row {
  padding-bottom: 18px;
}

.page-enter-active, .page-leave-active {
  transition: opacity .3s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateY(-2%);
}

.btn-rm {
  float: right;
}
.actions {
  max-width: 116px;
}

</style>
