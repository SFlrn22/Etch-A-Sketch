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

function color() {
    let squares = document.querySelectorAll(".square")
    for(let i = 0; i < squares.length; i++){
        squares[i].onmouseenter = () => {
            squares[i].setAttribute('style', 'background-color: black;')
        }
        squares[i].onmouseleave = () => {
            squares[i].setAttribute('style', 'background-color: black;')
        }
    }
}

firstBtn.onclick = () => {
    sketch.setAttribute('style', 'grid-template-columns: repeat(10, 1fr);');
    if(sketch.hasChildNodes()){
        reset();
        createSquares(100);
        color();
    } else {
        createSquares(100);
        color();
    }    
}

secondBtn.onclick = () => {
    sketch.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);');
    if(sketch.hasChildNodes()){
        reset();
        createSquares(256);
        color();
    } else {
        createSquares(256);
        color();
    }    
}

thirdBtn.onclick = () => {
    sketch.setAttribute('style', 'grid-template-columns: repeat(64, 1fr);');
    if(sketch.hasChildNodes()){
        reset();
        createSquares(4096);
        color();
    } else {
        createSquares(4096);
        color();
    }    
}

