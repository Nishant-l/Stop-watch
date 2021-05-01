// data
let timer;
const SECONDS_IN_MINUTES=60;
let leftTIme=25*SECONDS_IN_MINUTES+0;
// cashing dom
const display=document.querySelector('.display');
const minutes=display.querySelector('.minutes');
const second=display.querySelector('.seconds');
const controls=document.querySelector('.controls');
const startButton=controls.querySelector('.start');
const stopButton=controls.querySelector('.stop');
const resetButton=controls.querySelector('.reset');
// Adding listeners
startButton.addEventListener('click',start);
stopButton.addEventListener('click',stop);
resetButton.addEventListener('click',reset);
// initializers
render();
// functions
function reset(){
    leftTIme=25*SECONDS_IN_MINUTES+0;
    stop();
    render();
}
function start(){
    if(!timer){
        timer=setInterval(tick,1000);
    }
    
}
function tick(){
    leftTIme-=1;
    render();
}
function stop(){
    clearInterval(timer);
    timer=0;
}
function render(){
    const minutesLeft=Math.floor(leftTIme/SECONDS_IN_MINUTES);
    const secondLeft=leftTIme%SECONDS_IN_MINUTES;
    minutes.textContent=minutesLeft;
    second.textContent=pad(secondLeft);
}
function pad(num){
    if(num<10){
        return `0${num}`;
    }else{
        return num;
    }
}