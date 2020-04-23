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
            text: 'Red Fox Medical is dedicated to providing the best medical equipment for hospitals, clinics, and senior care homes. We guarantee our clients’ satisfaction by importing only the highest quality equipment and offering the lowest cost. Our passionate team strives to provide the best service for our clients through timely delivery and professional assistance. We are located in London, Ontario.'
        }
    }
}