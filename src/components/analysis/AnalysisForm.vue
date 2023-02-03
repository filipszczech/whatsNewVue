/* eslint-disable */
<template>
    <div class='w-3/4 mx-auto my-auto'>
        <form @submit.prevent="handleSubmit">
            <div class='grid grid-cols-2 gap-5'>
                <div class='w-full col-span-2'>
                    <label for="url-input"><p class='my-navy-font text-2xl sm:text-3xl font-semibold mb-2'>Wprowadź link artykułu do analizy:</p></label>
                    <br>
                    <div class='flex justify-between gap-5'>
                        <input id="url-input"
                        class='border-2 rounded-md bg-transparent p-2 w-full border-indigo-900 active:border-yellow-500'
                            type="text"
                            v-model="articleUrl"  
                        />
                        <div @click="articleUrl = ''" class="py-2 hover:cursor-pointer my-hover-effect hover:scale-125">
                            <img class='h-7 w-7' src="../../assets/images/clear.png"  alt='spinner-img' />
                        </div>
                    </div>
                </div>
                <div class='mt-2'>
                    <button v-if="!isLoading" class='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect'>Wyszukaj</button>
                    <button v-else disabled class='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg opacity-75'>Wyszukaj</button>
                </div>
                <div v-if="errorActive" class='mt-2 py-1 text-lg text-red-700 text-end'>
                    Wprowadź adres url!
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
        articleUrl: '',
        errorActive: false,
        isLoading: false
    };
  },
  methods: {
    handleSubmit() {
        this.errorActive = false
        if(this.articleUrl == ''){
            this.errorActive = true
            return 0;
        }
        this.isLoading = true

        this.fetchAnalysisArticle()
    },
    async fetchAnalysisArticle() {
        try {
            const res = await axios.post(
                `http://analytics.eventregistry.org/api/v1/extractArticleInfo?`
                + `&url=${this.articleUrl}`
                + `&apiKey=da1595a0-0013-444e-8eb4-2e30d17dbe27`
            );
            console.log(res.data);
            if(res.data['error']){
                this.$emit('set-article', 'wrong')
            }
            else{
                this.$emit('set-article', res.data)
            }
            this.isLoading = false
            
        }
        catch(error) {
            console.log(`error: ${error}`);
        }
    }
  },
};
</script>