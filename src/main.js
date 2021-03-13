import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);




// fontawesome開始
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// ...
library.add(fas, far, fab)


library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// fontawesome終了



Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
