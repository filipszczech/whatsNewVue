<template>
    <div class='grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-auto md:h-5/6 overflow-y-scroll'>
      <div class='my-auto flex flex-col space-y-12 z-10 py-12 mx-14 xl:mx-24 border-2 border-gray-100 shadow-xl hover:shadow-2xl transiton-all duration-700 ease-in-out rounded-xl'>
        <div class='mx-auto w-3/4'>
          <h1 class='my-navy-font text-2xl sm:text-3xl md:text-4xl font-medium'>
              Newsy z całego świata <br>zebrane w jednym miejscu
          </h1>
        </div>
        <div class='mx-auto w-3/4'>
          <router-link to="/explore">
            <button class='py-3 px-auto w-full xl:w-1/2 opacity-90 text-center text-white font-medium shadow-sm text-lg hover:scale-105 my-hover-effect my-yellow-bg rounded-sm border-gray-200'>Rozpocznij przeglądanie</button>
          </router-link>
          </div>
      </div>
      <div class='mt-20'>
        <img src="../../assets/images/bg-ilustration.jpg" alt="homepage-main-img" />
      </div>
    </div>
</template>
