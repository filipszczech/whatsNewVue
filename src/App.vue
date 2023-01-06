<template>
  <div class='h-screen w-screen p-3 sm:p-5' v-bind:style="{'background-color': '#000A67'}">
    <div class="bg-white w-full h-full rounded-md relative overflow-hidden">
      <the-navbar></the-navbar>
          <router-view v-slot="slotProps">
            <transition name="router-fade" mode="out-in">
              <component :is="slotProps.Component"></component>
            </transition>
          </router-view>
      <the-footer></the-footer>
      </div>
  </div>
</template>

<script>
import TheNavbar from './components/layouts/TheNavbar.vue'
import TheFooter from './components/layouts/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style global>
  .router-fade-enter-active{
    transition: opacity 0.3s ease-out;
  }

  .router-fade-leave-active{
    transition: opacity 0.3s ease-in;
  }

  .router-fade-enter-to,
  .router-fade-leave-from {
    opacity: 1;
  }

  .router-fade-enter-from,
  .router-fade-leave-to {
    opacity: 0;
  }
  .my-navy-font{
    color: #000A67;
}

.my-yellow-bg{
    background-color: #FFB703;
}

.my-hover-effect{
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.my-bg-triangle{
    /* clip-path: polygon(0 0, 100% 0, 86% 100%, 0% 100%); */
    background: #dbcefa;
    opacity: 0.2;
    background: linear-gradient(90deg, #d1ecff 75%, rgba(255,255,255,1) 100%);
    /* d1ecff */
}

.logo{
    z-index: 100;
    color: "#000A67";
    fill: "#000A67" !important;
}

.my-navbar{
        z-index: 50 !important;
}

.my-navy-border {
    border-color: #000A67;
}

.my-navy-bg {
    background-color: #000A67;
}
.my-navy-border:focus {
    border-color: #FFB703;
}

.my-yellow-border {
    border-color: #FFB703;
}

.my-yellow-text {
    color: #FFB703;
}

.bg-test{
    left: 10%;
    top: 10%;
}

.news-list{
    overflow-y: scroll !important;
}

::-webkit-scrollbar{
    width: 1em;
}

::-webkit-scrollbar-track{
    background: white;
    border-radius: 100vw;
    margin-block: 0.2em;
}

::-webkit-scrollbar-thumb{
    background: rgb(189, 195, 212);
    border-radius: 100vw;
}
</style>
