require('./bootstrap');

window.Vue = require('vue');
import router from './router'



Vue.component('Navbar', require('./components/frontend/partials/Navbar.vue').default);
Vue.component('site-footer', require('./components/frontend/partials/SiteFooter.vue').default);



const mainapp = new Vue({
    el: '#mainapp',
    router,
});