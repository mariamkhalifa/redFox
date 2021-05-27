import ProductComponent from "./ProductComponent.js"
import AllProtectiveEquipComponent from "./AllProtectiveEquipComponent.js"

export default {
    template: `
        <section id="products">
			<h2 class="mainHeading">{{ heading }}</h2>
			<!-- <p class="productsIntro">{{ intromsg }}</p> -->
            
            <div id="productsCon">
				<product v-for="(product, index) in products" :img="product.img" :name="product.name" 
				:desc1="product.desc1" :desc2="product.desc2" :key="index"/>

				<!-- <allprotective/> -->

			</div>
		</section>
    `,

    data() {
        return {
            heading: 'Our Products',
            intromsg: 'We offer our clients a variety of medical equipment at affordable prices.',
            products: [
                { name: 'Clean Room Sticky Mat', img: 'sticky-mat.jpg', desc1: 'A multilayered adhesive mat that captures dust and undesired particles off shoes and wheeled equipment before entering the controlled environment. Offered in a standard 30 layered mat, each layer is easily peeled off revealing a new clean polyethylene film ready for traffic.  Manufactured at one of the best factories in China, offering great quality satisfying Canadian standards at a substantially lower cost.', desc2: 'Price: $15'},
            ]

        }
	},
	
	components: {
		product: ProductComponent,
		allprotective: AllProtectiveEquipComponent
		
	}
}