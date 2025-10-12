
const TOKEN = '';
const tgURL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.querySelector('#form');
const questions = document.querySelector('#questions__form');
const massageAboutSending = document.querySelector('.massage-about-sending');
const wrapMassageAboutSending = document.querySelector('.massage-about-sending .wrap')

function TgMassage(idForm, text) {
    idForm.addEventListener('submit', function(e) {
        e.preventDefault()

        /*Check value in input*/
        let arrInput = [...idForm.querySelectorAll('input')]
        let o = 0; 
        arrInput.forEach((current) => {
            if(current.value === '') {
                return
            } else {
                o = 1
            }
        })
        if (o === 0) {
            return
        }
        /*
        //Assembling message
        
        let message = text(idForm).reduce((sum, current) => {
            return sum + current;
        }, ``);
        
        //Sending message

        axios.post(tgURL, {
            chat_id: '',
            parse_mode: 'html',
            text: message,
        })
        */

        idForm.reset()
        
        /*Appearance massage*/
        massageAboutSending.style.display = 'block';
        body.classList.add('noScroll');

        /*Hiding massage*/
        massageAboutSending.addEventListener('click', () => {
            wrapMassageAboutSending.style.transform = 'scaleY(0)';
            setTimeout(() => {
                massageAboutSending.style.display = 'none';
                body.classList.remove('noScroll');
                wrapMassageAboutSending.style.transform = ''
            }, 500)
        })
    })
    
}


TgMassage(
    form, 
    (myThis) => {
        return [
            `<b>Заявка с сайта!</b> \n`,  
            ` отправитель: ${myThis.name.value}`,  
        ]
        
    }

)
TgMassage(
    questions, 
    (myThis) => {
        return [
            `<b>Вопрос от клиента!</b> \n`,  
            ` Отправитель: ${myThis.name.value || '-'} \n`,
            ` Почта: ${myThis.email.value|| '-'} `
        ]
    }

)