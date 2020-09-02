import Vue from 'vue'
import App from './app.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'leaflet/dist/leaflet.css';
Vue.config.productionTip = false;
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSuitcase,
  faAmericanSignLanguageInterpreting,
  faAllergies,
  faBusinessTime,
  faUserShield,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSuitcase, faAmericanSignLanguageInterpreting, faAllergies, faBusinessTime, faUserShield, faBalanceScale)
console.log(library);
Vue.component('font-awesome-icon', FontAwesomeIcon)

export const Bus = new Vue();
Vue.prototype.$Bus = Bus;

new Vue({
  mounted () {
    AOS.init({
      disable: 'mobile',
    })
  },
  render: h => h(App),
}).$mount('#app')
