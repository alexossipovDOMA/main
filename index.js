const body = document.querySelector('body');
const CLSHeader = document.querySelector('.header');
const CLSHeaderBurger = document.querySelector('.header__burger');
const CLSDocumentsBtn = document.querySelector('.documents__btn');
const CLSDocumentsItem = document.querySelectorAll('.documents__item');
const CLSFeedbackBtnPrevious = document.querySelector('.feedback__btn-previous');
const CLSFeedbackBtnNext = document.querySelector('.feedback__btn-next');
const CLSFeedbackCarouselWrap = document.querySelector('.feedback__carousel-wrap');


CLSHeaderBurger.addEventListener('click', function() {
    CLSHeader.classList.toggle('active');
    body.classList.toggle('noScroll');
})

CLSDocumentsBtn.addEventListener('click', function() {
    if(CLSDocumentsItem[0].style.display === 'block') {
        for (const el of CLSDocumentsItem) {
            el.style.display = '';
        }
        CLSDocumentsBtn.textContent = 'Показать больше документов'
    } else {
        for (const el of CLSDocumentsItem) {
            el.style.display = 'block';
        }
        CLSDocumentsBtn.textContent = 'Скрыть'
    }
    
})

function carousel () {
    let mi = 0;
    let i = 0;

    CLSFeedbackBtnNext.addEventListener('click', function() {
        i += 2;
        if(CLSDocumentsItem.length - 2 >= i) {
            mi -= 102;
        } else {
            mi = 0;
            i = 0;
        }
        CLSFeedbackCarouselWrap.style.marginLeft = mi + '%';
        
    })

    CLSFeedbackBtnPrevious.addEventListener('click', function() {
        i -= 2;
        if(i >= 0) {
            mi += 102;
        } else {
            mi = -51 * (CLSDocumentsItem.length - 2);
            i = CLSDocumentsItem.length - 2;
        }
        CLSFeedbackCarouselWrap.style.marginLeft = mi + '%';
    })
}
carousel()
