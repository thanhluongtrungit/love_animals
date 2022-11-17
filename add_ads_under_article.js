 let postBodyNode = document.querySelector("div.post-body");
    
    let adsNode1 = document.createElement("div");
    adsNode1.innerHTML = "<div id='M843947ScriptRootC1385928'></div>"
    let script1 = document.createElement("script");
  	script1.setAttribute('src','https://jsc.adskeeper.com/l/o/lovepumi.store.1385928.js');
  	script1.setAttribute('async','async');
    adsNode1.append(script1)

    let adsNode2 = document.createElement("div");
    adsNode2.innerHTML = "<div id='M843947ScriptRootC1385939'></div>"
    let script2 = document.createElement("script");
  	script2.setAttribute('src','https://jsc.adskeeper.com/l/o/lovepumi.store.1385939.js');
  	script2.setAttribute('async','async');
    adsNode2.append(script2)
    
    postBodyNode.append(adsNode1);
    postBodyNode.append(adsNode2);
