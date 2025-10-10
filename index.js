const body = document.querySelector('body');
const CLSHeader = document.querySelector('.header');
const CLSHeaderBurger = document.querySelector('.header__burger');
const CLSHeader_menuItem = document.querySelectorAll('.header__menu-item > a');
const CLSHeader__menuBtn = document.querySelector('.header__menu-btn');
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
    /*Active item*/
    let active = false;

    CLSFeedbackCarouselItem.forEach((item) => {
        item.addEventListener('click', () => {
            active = true;
            item.querySelector('.carousel-text-items__item-wrap')
                .classList
                .toggle('carousel-text-items__active');
        })
    })
    
  
        CLSFeedbackCarouselWrap.addEventListener('scroll', () => {
            if(active) {
            CLSFeedbackCarouselItem.forEach((item) => {
                item.querySelector('.carousel-text-items__item-wrap')
                    .classList
                    .remove('carousel-text-items__active');
            })
            }
        })
        
    /*Prev*/
    CLSFeedbackBtnPrevious.addEventListener('click', () => {
        
        if(i === 0) {
            i = CLSFeedbackCarouselItem.length - num;
            CLSFeedbackCarouselWrap.scrollTo({
                top: 0,
                left: CLSFeedbackCarouselWrap.scrollWidth, 
            });
            return;
        }

        let wrapX = Math.round(CLSFeedbackCarouselWrap.getBoundingClientRect().x);
        let itemX = Math.round(CLSFeedbackCarouselItem[i - 1].getBoundingClientRect().x);
        let differenceX = itemX - wrapX;

        CLSFeedbackCarouselWrap.scrollBy({
            top: 0,
            left: differenceX, 
        });
        i--;

        
    })
    /*Next*/
    CLSFeedbackBtnNext.addEventListener('click', () => {

        if(i === CLSFeedbackCarouselItem.length - num) {
            i = 0;
            CLSFeedbackCarouselWrap.scrollTo({
                top: 0,
                left: 0, 
            });
            return;
        }

        let wrapX = Math.round(CLSFeedbackCarouselWrap.getBoundingClientRect().x);
        let itemX = Math.round(CLSFeedbackCarouselItem[i + 1].getBoundingClientRect().x);
        let differenceX = itemX - wrapX; 
        console.log(i)
        CLSFeedbackCarouselWrap.scrollBy({
            top: 0,
            left: differenceX,
        });
        i++;

    })
}
carousel()

function openAndClosedHeader() {
    let Header__tegAAndButton = [
        ...CLSHeader_menuItem,
        CLSHeader__menuBtn,
    ]

    function clickOnItem() {
        CLSHeaderBurger.addEventListener('click', function() {
            CLSHeader.classList.toggle('active');
            body.classList.toggle('noScroll');
        })

        Header__tegAAndButton.forEach((item) => {
            item.addEventListener('click', function() {

                CLSHeader.classList.remove('active');
                body.classList.remove('noScroll');

            })
        })    
    }
    clickOnItem()
}
openAndClosedHeader()

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


