import router from './components/Router.js'

const vm = new Vue({
    data: {
        burger: false
    },

    methods: {
        toggleMenu() {
            this.burger = !(this.burger);
        },

        scrollToProducts() {
            let mediaQuery1 = window.matchMedia('(min-width: 1024px)'),
                mediaQuery2 = window.matchMedia('(min-width: 767px)');
                
            if (mediaQuery1.matches) {
                TweenLite.to(window, 1, {scrollTo:{y:1200}});
            }
            else if (mediaQuery2.matches) {
                TweenLite.to(window, 1, {scrollTo:{y:1500}});
            }
            else {
                TweenLite.to(window, 1, {scrollTo:{y:1300}});
            }
        },

        scrollToContact() {
            let mediaQuery1 = window.matchMedia('(min-width: 1024px)'),
                mediaQuery2 = window.matchMedia('(min-width: 767px)');
                
            if (mediaQuery1.matches) {
                TweenLite.to(window, 1, {scrollTo:{y:2250}});
            }
            else if (mediaQuery2.matches) {
                TweenLite.to(window, 1, {scrollTo:{y:2900}});
            }
            else {
                TweenLite.to(window, 1, {scrollTo:{y:2900}});
            }
        },

        scrollTop() {
            TweenLite.to(window, 1, {scrollTo:{y:0}});
        }
    },


    router
}).$mount('#app')

// let waypoint = new Waypoint({
//     element: document.getElementById('products'),
//     handler: function(direction) {
//       console.log('Scrolled to waypoint!')
//       scrollTop.style.opacity = "1";
//     }
//   })