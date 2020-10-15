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

const appName = 'vue-app-content2';
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    vuetify,
    router,
    el: '#vue-app-content2',
    render(h) {
      return h(App, {
        props: {
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          appMountElement: this.appMountElement
        },
      })
    }
  },
});

export const bootstrap = vueLifecycles.bootstrap;

//export const mount = vueLifecycles.mount;
export function mount(props) {
  createDomElement(props.appMountElement);
  return vueLifecycles.mount(props);
}

export const unmount = vueLifecycles.unmount;

function createDomElement(shellElement) {
  if(document.getElementById(appName))
    return true;

  let el = document.getElementById(shellElement);
  if (el) {
      let newdiv = document.createElement('div');
      newdiv.id = appName;
      el.appendChild(newdiv);
  }
  return true;
}
