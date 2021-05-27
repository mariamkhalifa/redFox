export default {
    template: `
        <section id="about">
			<h2 class="mainHeading">{{ heading }}</h2>
			<p>{{ text }}</p>
			<img :src="'images/' + img" alt="logo">
		</section>
    `,

    data() {
        return {
            heading: 'Who We Are',
            img: 'logo-symbol.svg',
            text: 'We are a local Canadian business, located in London, Ontario. Red Fox is dedicated to providing the best equipment for your business. We guarantee our clients’ satisfaction by providing only the highest quality equipment and offering the lowest cost. Our passionate team strives to provide the best service for our clients through timely delivery and professional assistance.'
        }
    }
}