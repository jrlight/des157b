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
        let windowGraph = document.querySelector('#windowGraph');

        for(let i = 0; i < graph.childNodes.length; i++){
            graph.childNodes[i].addEventListener('click', function(){
                const popups = document.querySelectorAll('.popup');                
                if(popups.length > 0){
                    for(let i = (popups.length - 1); i <= 0; i--){
                        popups[i].parentNode.removeChild(popups[i]);
                    }
                }
                graph.childNodes[i].innerHTML = `<div class="popup">${data.Apps[i].appName}</h2><p>${data.Apps[i].timeUsed}</p>`;

                if(i === 0 || i === 1){
                    let html = '';
                    for(let j = 0; j < data.Apps[i].windowTitles.length; j++){
                        html += `<div class="windowDiv" title="${data.Apps[i].windowTitles[j].windowName}"></div>`;
                        windowGraph.innerHTML = html;
                        console.log(html);
                    }
                    
                    for(let k = 0; k < windowGraph.children.length; k++){
                        const kMod = k * (50 + k);
                        windowGraph.children[k].style.background = `rgb(${kMod/2.5}, ${kMod/0.9}, 50)`;
                        windowGraph.children[k].style.width = `${data.Apps[i].windowTitles[k].percentUsed}%`;
                    }
                }
                else{
                    // for(let windowDiv of windowGraph.childNodes){
                    //     windowGraph.removeChild(windowDiv);
                    // }
                    windowGraph.childNodes.forEach(element => {
                        windowGraph.removeChild(element);
                    });
                }
            });
        }
    }

    getData();
            
})();