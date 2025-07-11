(function(){
    'use strict';

    $('.title').t({
        blink:300,
        fin:function(){
            setTimeout(function(){
                $('.title').find('.t-caret').css({opacity:0});
            }, 2000)
        }
    });

    $('.directions').t({
        delay:2.4,
        blink:300,
        fin:function(){
            setTimeout(function(){
                $('.directions').find('.t-caret').css({opacity:0});
            }, 2000)
        }
    });

    $('.credits').t({
        delay:8,
        blink:300,
        init:function(){
            $('.credits').find('.t-caret').css({opacity:0});  
        },
        typing:function(){
            $('.credits').find('.t-caret').css({opacity:1});  
        },
        fin:function(){
            setTimeout(function(){
                $('.credits').find('.t-caret').css({opacity:0});
            }, 1500) 
        }
    });
    
    
    const smiley = new Vivus('smiley', {start:'manual', duration:90});
    const star = new Vivus('star', {start:'manual', duration:90});
    const exclamation = new Vivus('exclamation', {start:'manual', duration:90});

    let svgIdx = 0;


    const smileySvg = document.querySelector('#smiley');
    const starSvg = document.querySelector('#star');
    const exclamationSvg = document.querySelector('#exclamation');

    const drawZone = document.querySelector('#drawZone');
    const svgBtns = document.querySelectorAll('button');

    drawZone.addEventListener('click', draw);
        
    for(let i = 0; i < svgBtns.length; i++){
        svgBtns[i].addEventListener('click', function(){
            svgIdx = i;
        });
    }

    function draw(){
        switch(svgIdx){
            case 0:
                $(smileySvg).css('transform', 'translate(-50%, -50%)');
                smileySvg.style.top = `${event.clientY}px`;            
                smileySvg.style.left = `${event.clientX}px`;
                smiley.stop().reset().play();
                break;
            case 1:
                $(starSvg).css('transform', 'translate(-50%, -50%)');
                starSvg.style.top = `${event.clientY}px`;            
                starSvg.style.left = `${event.clientX}px`;
                star.stop().reset().play();
                break;
            case 2:
                $(exclamationSvg).css('transform', 'translate(-50%, -50%)');
                exclamationSvg.style.top = `${event.clientY}px`;            
                exclamationSvg.style.left = `${event.clientX}px`;
                exclamation.stop().reset().play();
                break;
            default:
                break;
        }
    }
})()