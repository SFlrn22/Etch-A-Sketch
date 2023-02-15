const sketch = document.querySelector(".sketch");
const firstBtn = document.querySelector("#opt-1");
const secondBtn = document.querySelector("#opt-2");
const thirdBtn = document.querySelector("#opt-3");
const blackBtn = document.querySelector("#black");
const rainbowBtn = document.querySelector("#rainbow");
let colorTrail = 0;

blackBtn.onclick = () => {
    rainbow.setAttribute('style', 'opacity: 1;')
    black.setAttribute('style', 'opacity: 0.5;')
    colorTrail = 0;
}

rainbowBtn.onclick = () => {
    rainbow.setAttribute('style', 'opacity: 0.5;')
    black.setAttribute('style', 'opacity: 1;')
    colorTrail = 1;
}

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
        if (colorTrail === 0){
            squares[i].onmouseenter = () => {
                squares[i].setAttribute('style', 'background-color: black;');
            }
            squares[i].onmouseleave = () => {
                squares[i].setAttribute('style', 'background-color: black;');
            }
        }
        else {
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let alpha = Math.random();
            squares[i].onmouseenter = () => {
                squares[i].setAttribute('style', `background-color: rgba(${red}, ${green}, ${blue}, ${alpha});`);
            }
            squares[i].onmouseleave = () => {
                squares[i].setAttribute('style', `background-color: rgba(${red}, ${green}, ${blue}, ${alpha});`);
            }
        }
    }
}

firstBtn.onclick = () => {
    sketch.setAttribute('style', 'grid-template-columns: repeat(10, 1fr);');
    firstBtn.setAttribute('style', 'opacity: 0.5;');
    secondBtn.setAttribute('style', 'opacity: 1;');
    thirdBtn.setAttribute('style', 'opacity: 1;');
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
    firstBtn.setAttribute('style', 'opacity: 1;');
    secondBtn.setAttribute('style', 'opacity: 0.5;');
    thirdBtn.setAttribute('style', 'opacity: 1;');
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
    firstBtn.setAttribute('style', 'opacity: 1;');
    secondBtn.setAttribute('style', 'opacity: 1;');
    thirdBtn.setAttribute('style', 'opacity: 0.5;');
    if(sketch.hasChildNodes()){
        reset();
        createSquares(4096);
        color();
    } else {
        createSquares(4096);
        color();
    }    
}

