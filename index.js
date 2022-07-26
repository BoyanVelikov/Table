function solve() {
    
    let row = [...document.querySelectorAll("tr")].forEach(row => row.addEventListener("click", backgroundChange));

    function backgroundChange(e) {
        
        let element = e.target.parentNode;
        let element2 = e.target.parentNode.parentNode;
        if (element2.tagName !== "THEAD") {
            if (!element.hasAttribute('style')) {
                [...document.querySelectorAll("tr")].forEach(r => r.removeAttribute('style'));
                element.style.background = "#413f5e";
            } else if (element.style.background) {
                element.removeAttribute("style");
            }
        }
    }
}