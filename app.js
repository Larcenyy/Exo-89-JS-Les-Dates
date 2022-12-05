
let timestamps = document.getElementById("timestamp")
let localTime = document.getElementById("localTime")
let localDate = document.getElementById("localDate")
let myDate = document.getElementById("myDate")
let dif = document.getElementById("diff")

let one = Date()
timestamps.innerHTML = one;

let three = new Date()
localDate.innerHTML = three.toLocaleTimeString()

let two = new Date()
localTime.innerHTML = two.toLocaleDateString()

let date =  new Date()

three.setDate(date.setHours(20))


date.setDate(two.getDate() + 2)
date.setHours(two.getHours() + 6)
date.setMinutes(two.getMinutes() - 1)
date.setSeconds(two.getSeconds() - 1)

let interval = two.getTime() - date.getTime();

let days = Math.floor(interval / 1000 / 60 / 60 / 24);
let hours = Math.floor(interval / 1000 / 60 / 60);
let minutes = Math.floor(interval / 1000 / 60);
let seconds = interval / 1000

myDate.innerHTML = date.toLocaleDateString() + " IL EST ACTUELLEMENT :" + date.toLocaleTimeString() + "<br>"
myDate.innerHTML += "Différence de jours : " + days + "<br>"
myDate.innerHTML += "Différence d'heures : " + hours + "<br>"
myDate.innerHTML += "Différence d'heures : " + minutes + "<br>"
myDate.innerHTML += "Différence d'heures : " + seconds


if (date > two){
    let add = document.createElement("div")
    add.style.width = "100px"
    add.style.height = "200px"
    add.style.background = "yellow"
}

console.log(one)
console.log(localTime)
console.log(localDate)