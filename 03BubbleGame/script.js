//in this we are using event bubbling concept  42
let timer = 60;
let score = 0;
var hitrn;

function runTimer() {
    var timerinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').innerHTML = timer;
        } else {
            clearInterval(timerinterval);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
};

function makeBubble() {
    var clutter = "";

    for (let i = 1; i <= 112; i++) {
        let rn = Math.floor(Math.random() * (10));
        clutter += `<div class = "bubble">${rn}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
};

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;
};

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').innerHTML = score;
};

document.querySelector('#pbtm').addEventListener('click',
    function (details) {
        var clickednum = Number(details.target.textContent);
        if(clickednum==hitrn&&timer>0){
            increaseScore();
            getNewHit();
            makeBubble();
        }
    }
);

getNewHit();
runTimer();
makeBubble();