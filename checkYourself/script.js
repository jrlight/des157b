(function(){
    'use strict';

    async function getData() {
        const fetchPromise = await fetch('data/laptopAppActivity.json');
        const data = await fetchPromise.json();   
        const graph = document.querySelector('#graph');
        graph.innerHTML = outputHTML(data);
        const appDivs = await document.querySelectorAll('.appUsed');
    
        for(let i = 0; i < appDivs.length; i++){
            appDivs[i].style.width = `${data.Apps[i].percentUsed}%`;
            const iMod = i * (50 + i)
            // appDivs[i].style.background = `rgb(${iMod/2}, ${iMod}, 70)`;
            appDivs[i].style.background = data.Apps[i].color;
        }

        graph.addEventListener('click', handleClick(data));
    }
    
    function outputHTML(data){
        let html = '';
        data.Apps.forEach(app => {
            html += `<div class="appUsed" title="${app.appName}"></div>`;
        });
        return html;
    }
    
    function handleClick(data) {
        const graph = document.querySelector('#graph');

        for(let i = 0; i < graph.childNodes.length; i++){
            graph.childNodes[i].addEventListener('click', function(){
                graph.childNodes[i].innerHTML = `<div class="popup">${data.Apps[i].appName}</h2><p>${data.Apps[i].timeUsed}</p>`;

                if(i === 0 || i === 1){
                    let html = '';
                    for(let j = 0; j < data.Apps[i].windowTitles.length; j++){
                        html += `<div class="windowDiv" title="${data.Apps[i].windowTitles[j].windowName}"></div>`;
                        console.log(data.Apps[i].windowTitles[j].windowName);
                    }
                }
            });
        }
    }

    getData();
            
})();