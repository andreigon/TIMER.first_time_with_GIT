// timer fields
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute ')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

// buttons
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new')

// listeners
startButton.addEventListener('click',() => {
clearInterval(interval)
interval=setInterval(startTimer,10)
});

pauseButton.addEventListener('click',() => {
    clearInterval(interval)
});

stopButton.addEventListener('click',() => {
    clearInterval(interval)
    clearTimer()
});

// Var
let hour = 00,
    minute = 00,
    second = 00, 
    millisecond = 00,
    interval

function startTimer()
{

    // MILLISECOND
    millisecond++
    if (millisecond <9) {
        millisecondElement.innerText = "0" +millisecond
    }
    if (millisecond >9) {
        millisecondElement.innerText=millisecond
    }
    if (millisecond>99) {
        second++
        secondElement.innerText="0"+second
        millisecond=0
        millisecondElement.innerText="0"+millisecond
    }


    // SECOND
    if (second<9) {
        secondElement.innerText="0" +second
    }
    if (second>9) {
        secondElement.innerText=second
    }
    if (second>59) {
        minute++
        minuteElement.innerText="0"+minute
        second=0
        secondElement.innerText="0"=second
    }   
    //  MINUTE
    if (minute<9) {
        minuteElement.innerText="0" +minute 
    }
    if (minute>9) {
        minuteElement.innerText=minute
        confirm("расчет окончен")
    }
        
    

    /* if (minute>59) {
        hour++
        hourElement.innerText="0" +hour
        minute=0
        minuteElement.innerText="0" +minute
    }

     HOUR
    if (hour<9) {
        hourElement.innerText="0" +hour
    }
    if (hour>9) {
        hourElement.innerText=hour
    }
    if (hour>99) {
        alert("Расчет окончен")
        return
    }*/
    
}    


 function clearTimer() {
    hour = 00,
    minute = 00,
    second = 00, 
    millisecond = 00,
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    millisecondElement.textContent = "00"
 }
/*
 newButton.addEventListener('click', () => {
     clearInterval(interval)
     const results = document.querySelector('.results')
     const block = document.createElement('div')
    
     results.append(block)
 })
 */
