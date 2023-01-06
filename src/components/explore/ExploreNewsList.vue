<template>
    <div v-for="article in articles || []" :key="article.uri">
        <div class='w-full grid grid-cols-4 gap-3 mb-5 lg:mb-8 border-t-4 my-navy-border rounded-tl-md bg-gray-100'>
            <div class='rounded-bl-md my-navy-border border-4 border-t-0 overflow-hidden'>
                <a :href="article.url" target="_blank" rel="noopener noreferrer"><img class='h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out' :src="article.image" alt='article-img'/></a>
            </div>
            <div class='col-span-3'>
                <a :href="article.url" target="_blank" rel="noopener noreferrer"><p class='my-navy-font text-lg lg:text-xl font-semibold mb-3'>{{ article.title }}</p></a>
                <p class='text-sm text-justify pr-2'>{{ article.body }}</p>
                <div class="w-full flex justify-end">
                    <button @click="loadArticle(article.uri)" class='py-1 px-5 text-center text-gray-100 rounded-md my-navy-bg opacity-80 hover:scale-105 my-hover-effect my-3 mr-3'>Przeczytaj u nas</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        articles:{
            type: Array,
        }
    },
    inject: ['modalArticle', 'isModalOpen'],
    methods: {
        loadArticle(article){
            this.fetchSingleNews(article)
            setTimeout(() => {
                this.$emit('setModalOpen', true)
                console.log(this.isModalOpen)
            }, 300);
        },
        async fetchSingleNews(uri){
            const res = await axios.post(
                    `https://eventregistry.org/api/v1/article/getArticle?`
                    + `articleUri=${ uri }`
                    + `&infoArticleBodyLen=-1`
                    + `&resultType=info`
                    + `&apiKey=da1595a0-0013-444e-8eb4-2e30d17dbe27`
                );
            this.$emit('setModalArticle', res.data[uri].info)
            console.log(this.modalArticle)
            // props.setSingleArticle(res.data[uri].info)
        }
    }
};
</script>