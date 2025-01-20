const p = document.querySelector('.root')

let time = new Date()
p.innerText = time.toLocaleTimeString()

function increaseTime(){
    p.innerText = time.toLocaleTimeString()
}

function startTime(){
    setInterval(increaseTime,1000)
    console.log('clicked')
}
