export default {
    template: `
        <section id="customers">
            <h2 class="mainHeading">{{ heading }}</h2>
            <div id="custImgCon">
                <img :src="'images/' + img1" class="custImg" alt="KL Logo">
                <img :src="'images/' + img2" class="custImg" alt="NB Logo">
            </div?
        </section>
    `,

    data() {
        return {
            heading: "Our Customers",
            img1: "KL_Logo.svg",
            img2: "NB_Logo.svg"
        }
    }
}