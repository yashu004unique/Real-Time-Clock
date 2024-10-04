const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')

// const dt = new Date()

// console.log(dt.getHours())
// console.log(dt.getMinutes())
// console.log(dt.getSeconds())
// console.log(dt.toLocaleTimeString())

setInterval(function(){

    const dt = new Date()

    hours.style.transform = `translate(-50%, -50%) rotate(${dt.getHours() * 30}deg)`

    minutes.style.transform = `translate(-50%, -50%) rotate(${dt.getMinutes() * 6}deg)`

    seconds.style.transform = `translate(-50%, -50%) rotate(${dt.getSeconds()* 6}deg)`

},1000)



