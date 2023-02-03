<template>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-5/6 overflow-y-hidden">
        <analysis-form
          @set-article="setArticle"
        ></analysis-form>
        <div class='px-5 pt-5 lg:pt-10'>
          <div class='mx-auto overflow-y-auto news-list' v-bind:style="{ 'height': '75vh' }">
              <analysis-content v-if='article'
              :article="article"
              >
                <template v-if="article == 'wrong'" #card-content>
                  <div className='h-full rounded-xl flex content-center text-4xl text-center font-semibold my-navy-font'>
                        <div className='my-auto mx-auto'>Analiza zakończyła się niepowodzeniem :(</div>
                  </div>
                </template>
                <template v-else #card-content>
                    <div class='grid grid-cols-6 gap-5 w-full h-1/4 mb-5 rounded-xl'>
                        <div class="col-span-2 rounded-md shadow-lg overflow-hidden">
                            <img class='h-full w-full object-cover' :src="article.image" alt='article-img'/>
                        </div>
                        <div class='h-full flex flex-col justify-between col-span-4 my-navy-font'>
                            <div class='text-2xl md:text-3xl font-bold'>
                                {{ article.title }}
                            </div>
                            <div class='text-base'>
                                <p><b>Data publikacji:</b> {{ article.date }}</p>
                                <p><b>źródło:</b> {{ article.source.title }}</p>
                            </div>
                        </div>
                    </div>
                    <div class='h-3/5 overflow-y-auto'>
                        <p class='text-base text-justify mt-5 pr-5'>{{ article.body }}</p>
                    </div>
                    <div>
                        <a :href="article.url" target="_blank" rel="noopener noreferrer"><button class='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect absolute right-5 bottom-5'>Przejdź do źródła</button></a>
                    </div>
                </template>
              </analysis-content>
              <analysis-content v-else
              :article="article"
              >
                <template #card-content>
                  <div class='h-full w-full flex items-center rounded-xl'>
                    <img class='mx-auto scale-75' src="../../assets/images/news_placeholder.png" alt="analysis-main-img" />
                  </div>
                </template>
              </analysis-content>
          </div>
        </div>
    </div>
</template>

<script>
import AnalysisForm from '../analysis/AnalysisForm.vue'
import AnalysisContent from '../analysis/AnalysisContent.vue'

export default {
  components: {
    AnalysisForm,
    AnalysisContent
  },
  data() {
    return {
        article: null,
    };
  },
  methods: {
    setArticle(article){
      this.article = article
      console.log(this.article)
    },
  }
}
</script>
