(function() {
    'use strict';
    const mask = document.querySelector('#mask');
    const lightSwitch = document.querySelector('#lightSwitch');
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    //spotlight code (js and css) from: https://blog.finiam.com/blog/spotlight-effect-with-js-and-css

    function handleMouseMove(event) {
        const { clientX, clientY } = event;
    
        mask.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 5px, var(--overlay) 70px)`;
    }
    
    if(mode === 'dark'){
        document.addEventListener('mousemove', handleMouseMove)
    }

    lightSwitch.addEventListener('click', function() {
        if (mode === 'dark') {
            mask.className = 'switch';
            body.className = 'switch';
            h1.className = 'switch';
            banner.className = 'switch';
            lightSwitch.src = 'images/switch_on.svg';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            mask.removeAttribute('class');
            body.removeAttribute('class');
            h1.removeAttribute('class');
            banner.removeAttribute('class');
            lightSwitch.src = 'images/switch_off.svg';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()