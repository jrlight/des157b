async function getData() {
    const fetchPromise = await fetch('data/laptopAppActivity.json');
    const data = await fetchPromise.json();    
    document.querySelector('#graph').innerHTML = outputHTML(data);
}

function outputHTML(data){
    let html = '';
    data.Apps.forEach(app => {
        html += `<div class="time">${app.timeUsed}</div>`;
    });
    return html;
}

getData();


(function(){
    'use strict';
    console.log('reading js');
})();