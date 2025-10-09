
    const TOKEN = '8428847089:AAFcRN_ShDeYS0L9fHbGByykCB-_pglN_1Q';
    const tgURL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const form = document.querySelector('#form');
    const questions = document.querySelector('#questions__form');

    function TgMassage(idForm, text) {
        idForm.addEventListener('submit', function(e) {

            e.preventDefault()

            let message = text.reduce((sum, current) => {
                console.log(current)
                return sum + current;
            }, ``);
            console.log(message)
            axios.post(tgURL, {
                chat_id: '1780668774',
                parse_mode: 'html',
                text: message,
            })

            idForm.reset()
        })
        
    }
    TgMassage(
        form, 
        [
            `<b>Заявка с сайта!</b> \n`,  
            ` отправитель: ${this.name.value}`, 
        ]

    )
    TgMassage(
        questions, 
        [
            `<b>Вопрос от клиента!</b> \n`,  
            ` отправитель: ${this.name.value}`, 
        ]

    )