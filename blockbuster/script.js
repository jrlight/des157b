(function(){
    'use strict';
    console.log('reading js');
    
    const popupClose = document.querySelector('div button');

    popupClose.addEventListener('click', function(){
        popupClose.parentElement.style.display = 'none';
    })

    const lines = document.querySelectorAll('section');
    const lineDisplay = {
        start: [1,5],
        stop: [3,7],
    }

    const intervalID = setInterval(checkTime, 1000);

    function checkTime(){
        for(let i = 0; i < lines.length; i++){
            if(lineDisplay.start[i] < video.currentTime && video.currentTime < overlay.stop[i]){
                lines[i].className = 'showing';
            }
            else{
                lines[i].className = 'hidden';
            }
        }
    }

})();