import router from './components/Router.js'

const vm = new Vue({
    data: {
        burger: false
    },

    methods: {
        toggleMenu() {
            this.burger = !(this.burger);
        },

        scrollTop() {
            TweenLite.to(window, 1, {scrollTo:{y:0}});
        }
    },


    router
}).$mount('#app')

let waypoint = new Waypoint({
    element: document.getElementById('products'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      scrollTop.style.opacity = "1";
    }
  })