import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Zibika from './views/Zibika.vue'
import Shots from './views/Shots.vue'
import PortfolioWorks from './components/PortfolioWorks'
import PortfolioIntro from './views/PortfolioIntro.vue'
// import Iecafe from './views/Iecafe.vue'
import ContactForm from './views/ContactForm.vue'
import UreshiiList from './views/UreshiiList.vue'
import TMTSite from './views/TMTSite.vue'
import TMTApp from './views/TMTApp.vue'
// import WP1 from './views/WP1.vue'
// import TrainingToday from './views/TrainingToday'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // Github用のもの↑
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/works',
      component: PortfolioWorks
    },

    {
      path: '/zibika',
      component: Zibika
    },
    {
      path: '/shots',
      component: Shots
    },
    {
      path: '/portfoliointro',
      component: PortfolioIntro
    },
    // {
    //   path: '/iecafe',
    //   component: Iecafe
    // },
    {
      path: '/contactform',
      component: ContactForm
    },
    {
      path: '/ureshii',
      component: UreshiiList
    },
    {
      path: '/TMTSite',
      component: TMTSite
    },
    {
      path: '/TMTApp',
      component: TMTApp
    },
    // {
    //   path: '/wp1',
    //   component: WP1
    // },
    // {
    //   path: '/trainingtoday',
    //   component: TrainingToday
    // }






  ],
  scrollBehavior () {
    // 望みのポジションを返す
    return { x: 0, y: 0 }
  }
})
