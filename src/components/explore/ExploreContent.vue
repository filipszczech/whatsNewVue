<template>
    <div v-if="!dataLoaded && !isLoading" class='flex flex-col space-y-0 justify-center'>
        <div class='w-2/3 h-1/2 mx-auto flex justify-center'>
            <img class='h-4/5 my-auto object-cover' src="../../assets/images/search.jpg" alt='content-img' />
        </div>
        <div class='w-full text-center'>
            <p class='my-navy-font text-2xl sm:text-3xl font-semibold'>Tu pojawią się wyniki</p>
        </div>
    </div>
    <div v-else-if="!dataLoaded && isLoading" class='flex flex-col space-y-0 justify-center'>
        <div class='w-2/3 h-1/2 mx-auto flex justify-center px-28 py-28'>
            <img class='' src="../../assets/images/spinner.gif"  alt='spinner-img' />
        </div>
        <div class='w-full text-center'>
            <p class='my-navy-font text-2xl sm:text-3xl font-semibold'>Pracujemy nad tym</p>
        </div>
    </div>
    <div v-else class='px-5 pt-5 lg:pt-10'>
        <div v-if="articles.length == 0" class='mx-auto overflow-y-auto text-4xl flex content-center h-full font-semibold my-navy-font'>
            <div className='my-auto mx-auto'>Nie znaleziono pasujących treści :(</div>
        </div>
        <div v-else class='mx-auto overflow-y-auto news-list' v-bind:style="{ 'height': '75vh' }">
            <explore-news-list 
                :articles="articles"
                @set-modal-open="setModalOpen"
                @set-modal-article="setModalArticle"
            > </explore-news-list>
        </div>
    </div>
</template>

<script>
import ExploreNewsList from './ExploreNewsList.vue'

export default {
  components: {
    ExploreNewsList
  },
  props: ['isLoading', 'dataLoaded', 'articles'],
  methods: {
    setModalOpen(){
        this.$emit('setModalOpen', true)
    },
    setModalArticle(article){
        this.$emit('setModalArticle', article)
    }
  }
};
</script>