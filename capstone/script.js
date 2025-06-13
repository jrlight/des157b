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
            vocabWords[i].style.background = 'var(--flagPink)';
        })
    }
    

    const hrtInfo = new Accordion(".hrtInfo", {
        duration: 400,
        showMultiple: true
    });

    const hrtInfoQs = document.querySelectorAll('.hrtInfo .ac-header button');

    for(let i = 0; i < hrtInfoQs.length; i++){        
        hrtInfoQs[i].addEventListener('click', function(){
            hrtInfoQs[i].style.background = 'var(--flagPink)';
        })
    }

    const openAllBtn = document.querySelector('.openAll');
    const closeAllBtn = document.querySelector('.closeAll');

    openAllBtn.addEventListener('click', function(){
        vocabList.openAll();
        hrtInfo.openAll();
    })

    closeAllBtn.addEventListener('click', function(){
        vocabList.closeAll();
        hrtInfo.closeAll();
    })    

})();