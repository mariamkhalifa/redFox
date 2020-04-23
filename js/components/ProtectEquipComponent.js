export default {
    props: ['name', 'img', 'spec1', 'spec2'],

    template: `
    <div class="protect-wrapper">
        <img :src="'images/' + img " :alt="name">
        <h4>{{ name }}</h4>
        <ul class="specs">
            <li>{{ spec1 }}</li>
            <li>{{ spec2}}</li>
        </ul>
    </div>
    `,
}