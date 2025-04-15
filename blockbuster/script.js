(function(){
    'use strict';
    console.log('reading js');
    
    const popupClose = document.querySelector('div button');

    popupClose.addEventListener('click', function(){
        popupClose.parentElement.style.display = 'none';
    })

    const lines = document.querySelectorAll('section');
    const lineDisplay = {
        start: [0.5, 5.85, 9, 10.4, 12, 14.15, 26.75, 30, 33],
        stop: [4, 7.3, 11, 13.5, 13.5, 19, 29, 31.5, 35],
    }
    const video = document.querySelector('video');

    video.addEventListener('playing', function(){
        setInterval(checkTime, 1000);
    });

    function checkTime(){
        for(let i = 0; i < lines.length; i++){
            if(lineDisplay.start[i] < video.currentTime && video.currentTime < lineDisplay.stop[i]){
                lines[i].className = 'showing';                
            }
            else{
                lines[i].className = 'hidden';
            }
        }
    }

})();