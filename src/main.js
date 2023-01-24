/* eslint-disable */
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './components/pages/HomePage.vue'
import ExplorePage from './components/pages/ExplorePage.vue'
import AnalysisPage from './components/pages/AnalysisPage.vue'
// import PolskaPage from './components/pages/PolskaPage.vue'
import './assets/tailwind.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/explore', component: ExplorePage },
    { path: '/analysis', component: AnalysisPage },
    // { path: '/polska', component: Polska }
  ]
});

const app = createApp(App);
app.use(router);

router.isReady().then(function(){
  app.mount('#app');
})
