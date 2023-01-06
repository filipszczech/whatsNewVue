<template>
    <div v-if="isModalOpen" class='absolute top-0 bg-gray-100 left-0 w-full h-full flex content-center z-50'>
        <div @click="setModalOpen(false)" class='absolute right-10 top-8 my-navy-font text-3xl font-bold cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>✕</div>
        <div class='w-3/5 h-4/5 rounded-md border-4 my-navy-border bg-white p-5 mx-auto my-auto shadow-2xl relative'>
            <div class='grid grid-cols-5 gap-5 w-full h-1/4 mb-5'>
                <div class="col-span-1 rounded-md shadow-lg overflow-hidden">
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
                <p class='text-base text-justify mt-5'>{{ article.body }}</p>
            </div>
            <div>
                <a :href="article.url" target="_blank" rel="noopener noreferrer"><button class='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect absolute right-5 bottom-5'>Przejdź do źródła</button></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['article', 'isModalOpen'],
    methods:{
        setModalOpen(state){
            this.$emit('setModalOpen', state)
        }
    }
};
</script>
