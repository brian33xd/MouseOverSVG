const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const eyes = document.querySelector(".eyes");
const mouth= document.querySelector(".snout");
const nose = document.querySelector(".nose");

let cursorPosition= {x:0, y:0};

let windowsWidth = window.innerWidth;
let windowsHeight = window.innerHeight;

function ScreenSize () {
 windowsHeight=window.innerHeight;
 windowsWidth=window.innerWidth;
}

function MouseMoves(e) {
cursorPosition={x:e.clientX,  y:e.clientY}
InitFollow();
}
function touchmove(e) {
    cursorPosition= {
    x:e.targetTouches[0].offsetX,
    y:e.targetTouches[0].offsetY        
    }
    InitFollow()
}

const SeguirCursor=(el, xratio, yratio)=> {
 const elOffset= el.getBoundingClientRect();
 const centerX = elOffset.x + elOffset.width / 2;
 const centerY = elOffset.y + elOffset.height / 2;

 const DistanceLeft = Math.round(((cursorPosition.x - centerX)*100) / window.innerWidth);
 const DistanceTop =  Math.round(((cursorPosition.y - centerY)*100) / window.innerHeight);

 el.style.transform=`translate(${DistanceLeft / xratio}px, ${DistanceTop / yratio}px)`;
}

const InitFollow = ()=> {
    if (ears) SeguirCursor(ears, 0, 0)
    if (head) SeguirCursor(head, 6, 6)
    if (eyes) SeguirCursor(eyes, 1.8, 1.8)
    if (mouth) SeguirCursor(mouth, 1.5, 1.5)
    if (nose) SeguirCursor(nose, 1, 1)
}

window.addEventListener("resize", ScreenSize);
window.addEventListener("mousemove", MouseMoves);
window.addEventListener("touchmove", touchmove );