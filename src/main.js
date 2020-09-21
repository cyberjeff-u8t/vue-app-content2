import './set-public-path';
import singleSpaVue from 'single-spa-vue';

import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router'
import Vuetify   from 'vuetify/lib';

//CSS
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';


Vue.config.productionTip = false;

const routes = [{ path: "/content2", name: "content2", component:App }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

const vuetify = new Vuetify({})

Vue.use(VueRouter)
Vue.use(Vuetify);

const containerSelector = '#content'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    vuetify,
    router,
    el: containerSelector,
    render(h) {
      return h(App, {
        props: {
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa
        },
      })
    }
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

export const devtools = {
  overlays: {
    selectors: [
      containerSelector
    ],
  }
};

