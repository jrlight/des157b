(function(){
    'use strict';

    console.log('reading js');
    
    const smiley = new Vivus('smiley', {start:'manual', duration:90});

    const smileySvg = document.querySelector('#smiley');

    const drawZone = document.querySelector('#drawZone');



    $('#title').t();

    drawZone.addEventListener('click', draw);

    function draw(){
        // drawZone.innerHTML = `<object id="smiley" type="image/svg+xml" data="images/smiley.svg" style="
        //     transform: translate(-50%, -50%);
        //     top: ${event.clientY}px;
        //     left: ${event.clientX}px;
        // "></object>`

        const test = getComputedStyle(drawZone)
        console.log(test.getPropertyValue('margin'));
        

        smileySvg.style.transform = 'translate(-50%, -50%)';
        smileySvg.style.top = `${event.clientY}px`;            
        smileySvg.style.left = `${event.clientX}px`;
        smiley.stop().reset().play();
    }
})()