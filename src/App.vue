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

<style>
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
</style>
