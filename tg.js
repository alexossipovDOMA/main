


    const m = document.querySelector('#form')
    const TOKEN = '8428847089:AAFcRN_ShDeYS0L9fHbGByykCB-_pglN_1Q'
    const tgURL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    m.addEventListener('submit', function(e) {
        e.preventDefault()

        let message = '<b>Заявка с сайта!</b>\n'
        message += `отправитель: ${this.name.value}`

        axios.post(tgURL, {
            chat_id: '1780668774',
            parse_mode: 'html',
            text: message
        })
    })

    