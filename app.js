var app = new Vue(
    {
        el: '#root',
        data: {
            mails: {},
            show : false, 
        },
        methods: {
            showMails() {
                this.show = true
            }
        },
        mounted() {
            const mailNumber = 10;
            const generatedMails = [];

            for (let i = 0; i < mailNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((resp) => {
                        generatedMails.push(resp.data.response)
                    })
            }
            this.mails = generatedMails
        },
    }
)

