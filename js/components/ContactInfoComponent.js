export default {
    props: ['info', 'icon'],

    template: `
        <li>
            <img :src="'images/' + icon " alt="icon" class="contactIcon">
            <p>{{ info }}</p>
        </li>
    `
}