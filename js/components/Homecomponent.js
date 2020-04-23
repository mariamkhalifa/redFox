import HeroComponent from './HeroComponent.js'
import AboutComponent from './AboutComponent.js'
import AllProductsComponent from './AllProductsComponent.js'
import contactComponent from './ContactComponent.js'

export default {
    name: 'home',

    template: `
        <section>
            <h2 class="hidden">Home Page</h2>
            
            <hero/>

            <about/>

            <allproducts/>

            <contact/>

        </section>
    `,

    components: {
        hero: HeroComponent,
        about: AboutComponent,
        allproducts: AllProductsComponent,
        contact: contactComponent
    }
}