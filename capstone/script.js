(function(){
    'use strict';

    console.log('reading js');
    
    const vocabList = new Accordion(".vocabList", {
        duration: 200,
        showMultiple: true,
        openOnInit: [0,1,2,3]
    });

    const accordion = new Accordion(".accordion-container", {
        duration: 400,
        showMultiple: true
    });

    const openAllBtn = document.querySelector('.openAll');
    const closeAllBtn = document.querySelector('.closeAll');

    openAllBtn.addEventListener('click', function(){
        accordion.openAll();
    })

    closeAllBtn.addEventListener('click', function(){
        accordion.closeAll();
    })

    console.log(accordion);    

})();