export default {
    template: `
    <section id="hero">
			<p class="introMsg">{{ msg }}</p>
			<i class="fa fa-angle-down fa-2x downArrow"></i>
	</section>
    `,

    data() {
        return {
            msg: 'Your Satisfaction is Our Success'
        }
    }
}