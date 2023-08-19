var timer = 60;
var score = 0;
var hitNumber = 0;

function increaseScore(){
    score += 10;
    document.querySelector(".score").textContent = score;
}

function getNewHit (){
    hitNumber = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hitNumber
}

function makeBubble() {
    var bubble = "";
    
    
    for(let i = 1; i < 103; i++){
        var randomNumber = Math.floor(Math.random()*10);
        bubble += `<div id="bubble">${randomNumber}</div>`
    }
    
    document.querySelector(".bubble-box").innerHTML = bubble;
}

function runtimer(){
    var timerInterval = setInterval(function(){
       if(timer>0){
        timer--
        document.querySelector(".time").textContent = timer;
       }else{
        clearInterval(timerInterval);
        document.querySelector(".bubble-box").innerHTML = `<h1>Game Over<h1/>`;
       }
    },1000)
}

document.querySelector(".bubble-box").addEventListener("click", function(details){
    var clickedNum = Number(details.target.innerHTML);
    if(clickedNum === hitNumber ){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


runtimer();
makeBubble();
getNewHit();
