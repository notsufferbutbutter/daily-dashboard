function getClock() {
    const date = new Date()
    const sec = String(date.getSeconds()).padStart(2, "0")
    const min = String(date.getMinutes()).padStart(2, "0")
    const hour = String(date.getHours()).padStart(2, "0")
    document.querySelector("#clock").innerText = (`${hour}:${min}:${sec}`)
}
getClock()
setInterval(getClock, 1000)