const sketch = document.querySelector(".sketch")
const firstBtn = document.querySelector("#opt-1")
const secondBtn = document.querySelector("#opt-2")
const thirdBtn = document.querySelector("#opt-3")
let square = document.createElement("div");

function createSquares(number) {
    for(let i = 1; i <= number; i++){
        square = document.createElement("div");
        square.classList.add('square');
        sketch.appendChild(square);  
    }
}

function reset() {
    let child = sketch.lastElementChild;
    while(child) {
        sketch.removeChild(child);
        child = sketch.lastElementChild;
    }
}

firstBtn.onclick = () => {
    sketch.setAttribute('style', 'grid-template-columns: repeat(10, 1fr);');
    if(sketch.hasChildNodes()){
        reset();
    } else {
        createSquares(100);
    }    
}

secondBtn.onclick = () => {
    sketch.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);');
    if(sketch.hasChildNodes()){
        reset();
    } else {
        createSquares(256);
    }    
}

thirdBtn.onclick = () => {
    sketch.setAttribute('style', 'grid-template-columns: repeat(64, 1fr);');
    if(sketch.hasChildNodes()){
        reset();
    } else {
        createSquares(4096);
    }    
}