import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUserSecret,
  faCashRegister,
  faCreditCard,
  faRightLeft,
  faDiagramProject,
  faFileInvoiceDollar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserSecret,
  faCashRegister,
  faCreditCard,
  faRightLeft,
  faDiagramProject,
  faFileInvoiceDollar,
  faUsers,
)

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
