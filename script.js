(function() {
    'use strict';
    const overlay = document.querySelector('#overlay');
    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            overlay.className = 'switch';
            body.className = 'switch';
            h1.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            overlay.removeAttribute('class');
            body.removeAttribute('class');
            h1.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()