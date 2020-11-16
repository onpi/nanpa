/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent";
import TopComponent from "./components/TopComponent";
import RegisterComponent from "./components/RegisterComponent";
import RegisterCompleteComponent from "./components/RegisterCompleteComponent";
import LoginComponent from "./components/LoginComponent";
import RecruitingComponent from "./components/RecruitingComponent";
import RecruitingCopyComponent from "./components/RecruitingCopyComponent";
import SearchComponent from "./components/SearchComponent";
import PostComponent from "./components/PostComponent";
import MypageComponent from "./components/MypageComponent";
import MypageEditComponent from "./components/MypageEditComponent";

// require('./bootstrap');
window.Vue = require('vue');
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    },
    {
      path: '/register/complete',
      name: 'register.complete',
      component: RegisterCompleteComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/',
      name: 'top',
      component: TopComponent
    },
    {
      path: '/recruiting',
      name: 'recruiting',
      component: RecruitingComponent
    },
    {
      path: '/recruiting/copy',
      name: 'recruiting.copy',
      component: RecruitingCopyComponent
    },
    {
      path: '/search',
      name: 'search',
      component: SearchComponent
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: PostComponent,
      props: true
    },
    {
      path: '/mypage/:userId',
      name: 'mypage',
      component: MypageComponent,
      props: true
    },
    {
      path: '/mypage/:userId/edit',
      name: 'mypage.edit',
      component: MypageEditComponent,
      props: true
    },

  ]
 });
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);
Vue.component('top-component', TopComponent);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
  el: '#app',
  router
});
