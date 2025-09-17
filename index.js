const body = document.querySelector('body');
const CLSHeader = document.querySelector('.header');
const CLSHeaderBurger = document.querySelector('.header__burger');
const CLSDocumentsBtn = document.querySelector('.documents__btn');
const CLSDocumentsItem = document.querySelectorAll('.documents__item');
const CLSFeedbackBtnPrevious = document.querySelector('.carousel-text-items__btn-previous');
const CLSFeedbackBtnNext = document.querySelector('.carousel-text-items__btn-next');
const CLSFeedbackCarouselWrap = document.querySelector('.carousel-text-items__wrap');
const CLSFeedbackCarouselItem = document.querySelectorAll('.carousel-text-items__item');

function carousel() {
    let i = 0;
    let num;

    function valueForNum() {
        if(window.innerWidth >= 1024) {
            num = 2;
        } else {
            num = 1;
        }
    }

    valueForNum()
    window.addEventListener('resize', () => {
        valueForNum()
    })

    /*Prev*/
    CLSFeedbackBtnPrevious.addEventListener('click', () => {
        let widthItem = CLSFeedbackCarouselItem[i].offsetWidth;

        if(i === 0) {
            i = CLSFeedbackCarouselItem.length - num;
            CLSFeedbackCarouselWrap.scrollBy(widthItem * i, 0);
            return;
        }

        CLSFeedbackCarouselWrap.scrollBy(-widthItem, 0);
        i--;
    })
    /*Next*/
    CLSFeedbackBtnNext.addEventListener('click', () => {
        let widthItem = CLSFeedbackCarouselItem[i].offsetWidth;

        if(i === CLSFeedbackCarouselItem.length - num) {
            i = 0;
            CLSFeedbackCarouselWrap.scrollTo(0, 0);
            return;
        }
        
        CLSFeedbackCarouselWrap.scrollBy(widthItem, 0);
        i++;
    })
}
carousel()

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


