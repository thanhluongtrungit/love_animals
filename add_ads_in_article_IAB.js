// Create the ads node to insert after img node
  let figureNodes = document.getElementsByTagName("img");

  for (let i = 0; i < figureNodes.length; i++) {
  
    let adsNode = document.createElement("div");
  	adsNode.innerHTML = "<div id='M843947ScriptRootC1385837'></div>"
    let script = document.createElement("script");
  	script.setAttribute('src','https://jsc.adskeeper.com/l/o/lovepumi.store.1385837.js');
  	script.setAttribute('async','async');
    adsNode.append(script)

    figureNodes[i].insertAdjacentElement('afterend', adsNode);
  }
