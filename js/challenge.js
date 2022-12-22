const counter = document.getElementById("counter")
let num = 0 

const counterInterval =   
setInterval(() => {
        num++
        counter.textContent = num
    }, 1000)



document.addEventListener('DOMContentLoaded', () => {
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")

function stopCounter() {
    clearInterval(counterInterval)
}


function addCounter() {
    counter.textContent = num++
}

function minusCounter() {
    counter.textContent = num--
}

pause.addEventListener("click", stopCounter)

plus.addEventListener("click", addCounter)

minus.addEventListener("click", minusCounter)
})






