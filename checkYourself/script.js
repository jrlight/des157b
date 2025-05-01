async function getData() {
    const fetchPromise = await fetch('data/laptopAppActivity.json');
    const data = await fetchPromise.json();    
    document.querySelector('#graph').innerHTML = outputHTML(data);
    const appDivs = await document.querySelectorAll('.appUsed');

    for(let i = 0; i < appDivs.length; i++){
        appDivs[i].style.flex = data.Apps[i].secondsUsed;
        appDivs[i].style.background = `#${i}${i}${i}${i}44`;
    }
}

function outputHTML(data){
    let html = '';
    data.Apps.forEach(app => {
        html += `<div class="appUsed">${app.timeUsed}</div>`;
    });
    return html;
}

getData();


(function(){
    'use strict';
    console.log('reading js');    
})();