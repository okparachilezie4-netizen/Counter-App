let count = 0
countTag = document.getElementById("count-tag")

function increment() {
    count = count + 1
    countTag.innerText = count
}

function reset() {
     countTag.innerText = 0
}