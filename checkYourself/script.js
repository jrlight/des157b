(function(){
    'use strict';

    async function getData() {
        const fetchPromise = await fetch('data/laptopAppActivity.json');
        const data = await fetchPromise.json();    
        document.querySelector('#graph').innerHTML = outputHTML(data);
        const appDivs = await document.querySelectorAll('.appUsed');
    
        for(let i = 0; i < appDivs.length; i++){
            appDivs[i].style.width = `${data.Apps[i].percentUsed}%`;
            // appDivs[i].style.background = `#${i}${i}${i}${i}44`;
            const iMod = i * (50 + i)
            appDivs[i].style.background = `rgb(${iMod/2}, ${iMod}, 70)`;
        }

        return data;
    }
    
    function outputHTML(data){
        let html = '';
        data.Apps.forEach(app => {
            html += `<div class="appUsed" title="${app.appName}"></div>`;
        });
        return html;
    }
    
    const allData = getData();
    let graph = document.querySelector('#graph');

    async function handleClick(allData, graph) {
        const appDivs = await graph.childNodes;
        console.log(appDivs);
        
        // await appDivs[0].addEventListener('click', async function(){
        //     graph.children[0].innerHTML = '<p>hi</p>'
        // });

        // await graph.addEventListener('click', async function(){
        //     graph.children[0].innerHTML = '<p>hi</p>'
        // });

        // for(const appDiv of graph.childNodes){
        //     console.log(appDiv);
            
        //     await appDiv.addEventListener('click', async function(){
        //         appDiv.innerHTML = '<p>hi</p>';
        //     });
        // }
    }

    handleClick(allData, graph)
            
})();