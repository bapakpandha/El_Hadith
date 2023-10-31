function tambahScriptKeHead() {
    var elemenScript = document.createElement('script');
    elemenScript.src = '/Home/index.js'; 
    var elemenHead = document.querySelector('head');
    elemenHead.appendChild(elemenScript);
}
tambahScriptKeHead();