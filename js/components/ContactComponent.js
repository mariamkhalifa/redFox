import ContactInfoComponent from "./ContactInfoComponent.js"

export default {
    template: `
        <section id="contact">
			<h2 class="mainHeading">{{ heading }}</h2>
            <p id="contactText">{{ intromsg }}</p>
            
			<form @submit.prevent="handleMail" id="contactForm" action="contact/data_contact.php" method="POST">
				<p class="formMsg">{{ formmsg }}</p>

				<label for="u-name">Name</label>
				<input v-model="input.name" id="u-name" type="text" name="name" placeholder="name.." required>
				
				<label for="u-email">Email</label>
				<input v-model="input.email" id="u-email" type="email" name="email" placeholder="email.." required>
				
				<label for="u-subject">Subject</label>
				<input v-model="input.subject" id="u-subject" type="text" name="subject" placeholder="subject.." required>
				
				<label for="u-message">Message</label>
				<textarea v-model="input.message" id="u-message" name="message" placeholder="message.." required></textarea>
				
				<input id="submit" type="submit" value="Submit">
            </form>
            
			<ul>
				<contactinfo v-for="(info, index) in contactinfo" :info="info.info" :icon="info.icon" :key="index"/>
			</ul>
		</section>
    `,

    data() {
        return {
            heading: 'Contact Us',
            intromsg: 'We are always available to answer all your inquiries. Feel free to use this form or email us.',
            formmsg: '',
            input: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            contactinfo: [
                { info: 'info@redfoxmedical.ca', icon: 'mail-icon-black.png'},
                { info: '226-376-7375', icon: 'phone-icon-black.png'}
            ]
        }
    },

    methods: {
        handleMail() {
            let formdata = new FormData(document.querySelector('#contactForm')),
                maildata = {};
        
            for (let [key,value] of formdata.entries()) {
                maildata[key] = value;
            }
        
            if (maildata.name !== "" && maildata.email !== "" && maildata.subject !== "" && maildata.message !== "" ) {
                let url = './contact/data_contact.php';
        
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(maildata)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.formmsg = data;
                })
                .catch(err => console.log(err));
            } else {
                this.formmsg = 'Please fill out the required fields!'
            } 
        }
    },

    components: {
        contactinfo: ContactInfoComponent
    }
}