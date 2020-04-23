import ProtectEquipComponent from "./ProtectEquipComponent.js"

export default {
    template: `
        <section class="protectEquipCon">
            <h3 class="productTitle">{{ title }}</h3>

            <div class="protectEquip">

                <protectequip v-for="(equip, index) in protectquip"
                :name="equip.name" :img="equip.img" :spec1="equip.spec1"
                :spec2="equip.spec2" :key="index"/>

            </div>
           
        </section>
    `,

    data() {
        return {
            title: 'Human Protective Equipment', 
            img: 'surgical-cap.jpg',
            protectquip: [
                { name: 'Surgical Mask 3-Ply', img: '3ply-surgical-mask2.jpg', spec1: 'Level 2 - Price: $35/box <span>(50 pcs)</span>', spec2: 'Level 3 - Price: $40/box <span>(50 pcs)</span>'},
                { name: 'Surgical Cap with Easy Tie', img: 'surgical-cap-easy-tie2.jpg', spec1: 'Price: $0.10', spec2: ''},
                { name: 'Surgical Cap with Elastic Band', img: 'surgical-cap-elastic2.jpg', spec1: 'Price: $0.10', spec2: ''},
                { name: 'Mesh Hairnet', img: 'mesh-hairnet2.jpg', spec1: 'Price: $0.11', spec2: ''},
                { name: 'Mop Cap (Double Elastic)', img: 'double-elastic-mop-cap2.jpg', spec1: 'Price: $0.04', spec2: ''},
                { name: 'Non-Woven Beard Cover', img: 'non-woven-beard-cover2.jpg', spec1: 'Price: $0.051', spec2: ''},
                { name: 'Bouffant Round Cap', img: 'bouffant-round-cap2.jpg', spec1: 'Price: $0.051', spec2: ''},
                { name: 'Skid-Proof Shoe Cover', img: 'skid-proof-shoes-cover2.jpg', spec1: 'Price: $0.10', spec2: ''},
                { name: 'Non-woven Shoe Cover', img: 'non-woven-shoes-cover2.jpg', spec1: 'Price: $0.063', spec2: ''},
                { name: 'ESD Shoe Cover', img: 'esd-shoes-cover2.jpg', spec1: 'Price: $0.18', spec2: ''},
            ]
        }
    },

    components: {
        protectequip: ProtectEquipComponent
    }
}