export default {
    props: ['name', 'img', 'desc1', 'desc2'],

    template: `
        <section class="product">
            <img :src="'images/' + img" :alt="name" class="productImg">
            <div class="productText">
                <h3 class="productTitle">{{ name }}</h3>
                <ul>
                    <li class="productDesc">{{ desc1 }}</li>
                    <li class="productDesc">{{ desc2 }}</li>
                </ul>
            </div>
        </section>
    `,

}