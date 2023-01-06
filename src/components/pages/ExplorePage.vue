<template>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-5/6 overflow-y-hidden">
        <explore-form
          :articles="articles"
          :isLoading="isLoading"
          :dataLoaded="dataLoaded"
          @toggle-is-loading="toggleIsLoading"
          @toggle-data-loaded="toggleDataLoaded"
          @set-articles="setArticles"
        ></explore-form>
        <explore-content
          :articles="articles"
          :isLoading="isLoading"
          :dataLoaded="dataLoaded"
          @set-modal-open="setModalOpen"
          @set-modal-article="setModalArticle"
        ></explore-content>
        <explore-article-modal
          :article="modalArticle"
          :isModalOpen="isModalOpen"
          @set-modal-open="setModalOpen"
        ></explore-article-modal>
    </div>
</template>

<script>
import ExploreForm from '../explore/ExploreForm.vue'
import ExploreContent from '../explore/ExploreContent.vue'
import ExploreArticleModal from '../explore/ExploreArticleModal.vue'

export default {
  components: {
    ExploreForm,
    ExploreContent,
    ExploreArticleModal
  },
  provide(){
    return{
      modalArticle: this.modalArticle,
      isModalOpen: this.isModalOpen
    };
  },
  data() {
    return {
        isLoading: false,
        dataLoaded: false,
        articles: null,
        modalArticle: null,
        isModalOpen: false
    };
  },
  methods: {
    toggleIsLoading(status){
      this.isLoading = status
      console.log("is loading: " + this.isLoading)
    },
    setArticles(articles){
      this.articles = articles
      console.log(this.articles)
    },
    toggleDataLoaded(status){
      this.dataLoaded = status
    },
    showArticle(){
      console.log(this.isModalOpen)
      console.log(this.modalArticle)
    },
    setModalOpen(status){
      this.isModalOpen = status
      console.log(this.isModalOpen)
    },
    setModalArticle(article){
      this.modalArticle = article
      console.log(this.modalArticle)
    }
  }
}
</script>
