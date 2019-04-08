import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from "vuex";

Vue.config.productionTip = false
Vue.use(Router);
Vue.use(Vuex);

const HelloWorld = () => import('./components/HelloWorld');
const Home = () => import('./components/Home');

const store = new Vuex.Store({
  // ...
  state: {
    score: 0
  },
  getters: {
    score(state){
      return state.score
    }
  },
  mutations: {
    increment(state, step){
      state.score += step
    }
  },
  actions: {
    incrementScore: ({commit}) => {
      setTimeout(() => {
        commit('increment', 3)
      }, delay);
    }
  }
})

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'helloworld',
      path: '/helloworld',
      component: HelloWorld
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
