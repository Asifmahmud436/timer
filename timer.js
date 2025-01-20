const p = document.querySelector('.root')

let time = new Date()
p.innerText = time.toLocaleTimeString()

function increaseTime(){
    time = new Date()
    p.innerText = time.toLocaleTimeString()
}
let intervalId;
function startTime(){
    intervalId = setInterval(increaseTime,1000)
}

function stopTime(){
    clearInterval(intervalId)
}