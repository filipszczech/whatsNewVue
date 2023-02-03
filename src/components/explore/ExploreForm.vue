/* eslint-disable */
<template>
    <div class='w-3/4 mx-auto my-auto z-10'>
        <form @submit.prevent="handleSubmit">
            <p class='my-navy-font text-2xl sm:text-3xl font-semibold mb-8'>Jakie wiadomości Cię interesują?</p>
            <div class='grid grid-cols-2 gap-5'>
                <div class='w-full'>
                    <label for="key-word">Słowo klucz:</label>
                    <br>
                    <input id="key-word"
                    class='border-2 rounded-md my-navy-border bg-transparent p-2 w-full' 
                        type="text"
                        v-model="keyWord"
                        
                    />
                </div>
                <div class='w-full'>
                    <label for="category">kategoria:</label>
                    <br>
                    <select id="category"
                        class='border-2 rounded-md my-navy-border bg-transparent p-2 w-full'
                        v-model="category">
                        <option value="dmoz/Computers">IT</option>
                        <option value="dmoz/Arts">Sztuka</option>
                        <option value="dmoz/Business">Biznes</option>
                        <option value="news/Politics">Polityka</option>
                        <option value="dmoz/Arts/Music">Muzyka</option>
                    </select>
                </div>
                <div class='w-full'>
                    <label for="language">Język:</label>
                    <br>
                    <select id="language"
                    class='border-2 rounded-md my-navy-border bg-transparent p-2 w-full'
                    v-model="country">
                        <option value="eng">angielski</option>
                        <option value="pol">polski</option>
                        <option value="spa">hiszpański</option>
                        <option value="deu">niemiecki</option>
                    </select>
                </div>
                <div class='w-full'>
                    <label for="results">Liczba wyników:</label>
                    <br>
                    <select id="results" class='border-2 rounded-md my-navy-border bg-transparent p-2 w-full'
                    v-model="resultsCount">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div class='mt-3'>
                    <button v-if="!isLoading" class='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect'>Wyszukaj</button>
                    <button v-else disabled class='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg opacity-75'>Wyszukaj</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['isLoading', 'dataLoaded'],
  data() {
    return {
        keyWord: '',
        resultsCount: '10',
        country: 'eng',
        category: 'news/Politics'
    };
  },
  methods: {
    handleSubmit() {
        if(this.dataLoaded){
            this.$emit('toggle-data-loaded', false)
        }
        this.$emit('toggle-is-loading', true)
        this.fetchFilteredNews()
    },
    async fetchFilteredNews() {
        try {
            const res = await axios.post(
                `https://eventregistry.org/api/v1/article/getArticles?`
                + `resultType=articles`
                + `&keyword=${this.keyWord}`
                + `&categoryUri=${this.category}` 
                + `&keywordOper=or`
                + `&lang=${this.country}`
                + `&articlesSortBy=date`
                + `&includeArticleConcepts=true`
                + `&includeArticleCategories=true`
                + `&articleBodyLen=300`
                + `&articlesCount=${this.resultsCount}`
                + `&isDuplicateFilter=skipDuplicates`
                + `&apiKey=da1595a0-0013-444e-8eb4-2e30d17dbe27`
            );
            this.$emit('set-articles', res.data.articles.results)
            this.$emit('toggle-is-loading', false)
            this.$emit('toggle-data-loaded', true)
            
        }
        catch(error) {
            console.log(`error: ${error}`);
        }
    }
  },
};
</script>