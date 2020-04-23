export default {
    template: `
    <section id="hero">
			<p class="introMsg">{{ msg }}</p>
			<i @click="scrollDown" class="fa fa-angle-down fa-2x downArrow"></i>
	</section>
    `,

    data() {
        return {
            msg: 'Your Satisfaction is Our Success'
        }
    },

    methods: {
        scrollDown() {
            let mediaQuery1 = window.matchMedia('(min-width: 1024px)'),
                mediaQuery2 = window.matchMedia('(min-width: 767px)');
                
            if (mediaQuery1.matches) {
                TweenLite.to(window, 1, {scrollTo:{y:740}});
            }
            else if (mediaQuery2.matches) {
                TweenLite.to(window, 1, {scrollTo:{y:860}});
            }
            else {
                TweenLite.to(window, 1, {scrollTo:{y:530}});
            }
        }
    }
}