/* eslint-disable */
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './components/pages/HomePage.vue'
import ExplorePage from './components/pages/ExplorePage.vue'
// import AboutPage from './components/pages/AboutPage.vue'
// import PolskaPage from './components/pages/PolskaPage.vue'
import './assets/tailwind.css'
import './assets/global.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/explore', component: ExplorePage },
    // { path: '/about', component: About },
    // { path: '/polska', component: Polska }
  ]
});

const app = createApp(App);
app.use(router);

router.isReady().then(function(){
  app.mount('#app');
})
