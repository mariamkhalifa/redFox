import HeroComponent from './HeroComponent.js'
import AboutComponent from './AboutComponent.js'
import AllProductsComponent from './AllProductsComponent.js'
import CustomersComponent from './CustomersComponent.js'
import ContactComponent from './ContactComponent.js'

export default {
    name: 'home',

    template: `
        <section>
            <h2 class="hidden">Home Page</h2>
            
            <hero/>

            <about/>

            <allproducts/>

            <customers/>

            <contact/>

        </section>
    `,

    components: {
        hero: HeroComponent,
        about: AboutComponent,
        allproducts: AllProductsComponent,
        customers: CustomersComponent,
        Contact: ContactComponent
    }
}