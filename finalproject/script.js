(function(){
    'use strict';
    console.log("reading js");

    const prevBtn = document.querySelector('#previous');
    const nextBtn = document.querySelector('#next');
    const notebook = document.querySelector('#notebook');
    
    const arches = document.querySelector('#arches');
    const grandCanyon = document.querySelector('#grandcanyon');
    const denali = document.querySelector('#denali');
    const yellowstone = document.querySelector('#yellowstone');
    const dixie = document.querySelector('#dixie');
    
    const closePopup1 = document.querySelector('#close1');
    const closePopup2 = document.querySelector('#close2');
    const closePopup3 = document.querySelector('#close3');
    const closePopup4 = document.querySelector('#close4');
    const closePopup5 = document.querySelector('#close5');

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
                    page1.style.zIndex = 0;
                    break;
                case 2:
                    page2.classList.add('flipped');
                    page2.style.zIndex = 1;
                    break;
                case 3:
                    page3.classList.add('flipped');
                    page3.style.zIndex = 2;
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

    /* OPEN POPUPS */
    arches.addEventListener('click', function(){
        archespopup.showModal();
    });
    grandCanyon.addEventListener('click', function(){
        grandcanyonpopup.showModal();
    });
    denali.addEventListener('click', function(){
        denalipopup.showModal();
    });
    yellowstone.addEventListener('click', function(){
        yellowstonepopup.showModal();
    });
    dixie.addEventListener('click', function(){
        dixiepopup.showModal();
    });
    
    /* CLOSE POPUPS */
    closePopup1.addEventListener('click', function(){
        archespopup.close();
    });
    closePopup2.addEventListener('click', function(){
        grandcanyonpopup.close();
    });
    closePopup3.addEventListener('click', function(){
        denalipopup.close();
    });
    closePopup4.addEventListener('click', function(){
        yellowstonepopup.close();
    });
    closePopup5.addEventListener('click', function(){
        dixiepopup.close();
    });

    /* CHANGE BG IMAGE */
    document.getElementById('arches').addEventListener('mouseover', function() {
        document.body.style.backgroundImage = "url('images/arches/archesbg.jpg')";
    });
    document.getElementById('arches').addEventListener('mouseout', function() {
        document.body.style.backgroundImage = "url('images/background.jpg')";
    });
    document.getElementById('denali').addEventListener('mouseover', function() {
        document.body.style.backgroundImage = "url('images/denali/denalibg.JPG')";
    });
    document.getElementById('denali').addEventListener('mouseout', function() {
        document.body.style.backgroundImage = "url('images/background.jpg')";
    });
    document.getElementById('yellowstone').addEventListener('mouseover', function() {
        document.body.style.backgroundImage = "url('images/yellowstone/yellowstonebg.jpg')";
    });
    document.getElementById('yellowstone').addEventListener('mouseout', function() {
        document.body.style.backgroundImage = "url('images/background.jpg')";
    });
    document.getElementById('grandcanyon').addEventListener('mouseover', function() {
        document.body.style.backgroundImage = "url('images/grandcanyon/grandcanyonbg.jpg')";
    });
    document.getElementById('grandcanyon').addEventListener('mouseout', function() {
        document.body.style.backgroundImage = "url('images/background.jpg')";
    });
    document.getElementById('dixie').addEventListener('mouseover', function() {
        document.body.style.backgroundImage = "url('images/dixie/dixiebg.jpg')";
    });
    document.getElementById('dixie').addEventListener('mouseout', function() {
        document.body.style.backgroundImage = "url('images/background.jpg')";
    });

})();