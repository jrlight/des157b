(function(){
    'use strict';

    console.log('reading js');
    
    const vocabList = new Accordion(".vocabList", {
        duration: 300,
        showMultiple: true
    });

    const vocabWords = document.querySelectorAll('.vocabList .ac-header button');

    for(let i = 0; i < vocabWords.length; i++){        
        vocabWords[i].addEventListener('click', function(){
            // if(vocabWords[i].style.background-color === 'var(--flagBlue)'){
            //     vocabWords[i].style.background-color = 'var(--flagPink)';
            // } else{
            //     vocabWords[i].style.background-color = 'var(--flagBlue)';
            // }
            vocabWords[i].style.background = 'var(--flagPink)';
        })
    }
    

    // const accordion = new Accordion(".accordion-container", {
    //     duration: 400,
    //     showMultiple: true
    // });

    const openAllBtn = document.querySelector('.openAll');
    const closeAllBtn = document.querySelector('.closeAll');

    openAllBtn.addEventListener('click', function(){
        vocabList.openAll();
    })

    closeAllBtn.addEventListener('click', function(){
        vocabList.closeAll();
    })    

})();