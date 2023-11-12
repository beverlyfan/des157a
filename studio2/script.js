(function(){
    'use strict'

    const prevBtn = document.querySelector('#previous');
    const nextBtn = document.querySelector('#next');
    const notebook = document.querySelector('#notebook');

    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');
    const page3 = document.querySelector('#page3');

    let currentPage = 1;
    let numOfPages = 3;
    let maxPage = numOfPages + 1;

    prevBtn.addEventListener('click', goPrevPage);
    nextBtn.addEventListener('click', goNextPage);

    function openBook() {
        notebook.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }
    
    function closeBook(atBeginning) {
        if (atBeginning) {
            notebook.style.transform = 'translateX(0%)';
        } else {
            notebook.style.transform = 'translateX(100%)';
        }

        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }

    function goNextPage(){
        if (currentPage < maxPage) {
            switch(currentPage) {
                case 1:
                    openBook();
                    page1.classList.add('flipped');
                    page1.style.zIndex = 1;
                    break;
                case 2:
                    page2.classList.add('flipped');
                    page2.style.zIndex = 2;
                    break;
                case 3:
                    page3.classList.add('flipped');
                    page3.style.zIndex = 3;
                    closeBook(false);
                    break;
            }
            currentPage ++;
        }
    }

    function goPrevPage(){
        if (currentPage > 1) {
            switch(currentPage) {
                case 2:
                    closeBook(true);
                    page1.classList.remove('flipped');
                    page1.style.zIndex = 3;
                    break;
                case 3:
                    page2.classList.remove('flipped');
                    page2.style.zIndex = 2;
                    break;
                case 4:
                    openBook();
                    page3.classList.remove('flipped');
                    page3.style.zIndex = 1;
                    break;
            }
            currentPage --;
        }
    }

})();