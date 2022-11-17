// Create the ads node to insert after img node
  let figureNodes = document.getElementsByTagName("img");

  for (let i = 0; i < figureNodes.length; i++) {
  
    let adsNode = document.createElement("div");
  	adsNode.innerHTML = "<div id='M843947ScriptRootC1385941'></div>"
    let script = document.createElement("script");
  	script.setAttribute('src','https://jsc.adskeeper.com/l/o/lovepumi.store.1385941.js');
  	script.setAttribute('async','async');
    adsNode.append(script)

    figureNodes[i].insertAdjacentElement('afterend', adsNode);
    
    let titleNode = document.querySelector("div.post-title-container");
    
    let adsNode1 = document.createElement("div");
    adsNode1.innerHTML = "<div id='M843947ScriptRootC1385920'></div>"
    let script1 = document.createElement("script");
  	script1.setAttribute('src','https://jsc.adskeeper.com/l/o/lovepumi.store.1385920.js');
  	script1.setAttribute('async','async');
    adsNode1.append(script1)
    
    titleNode.append(adsNode1);
  }
