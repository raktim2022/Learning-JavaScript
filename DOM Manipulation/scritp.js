// Selection of an element
var a = document.querySelector("h1")

// change HTML

a.innerHTML = "Change element"

// Chnage CSS
// here the properties is written in camal case

a.style.color = "yellow"
a.style.backgroundColor = "black"

// Event Listener

a.addEventListener("click", function () {
    a.innerHTML = "Loove UU"
    a.style.color="red"
})


// bulb onn off....
var bulb = document.querySelector("#bulb")
var but = document.querySelector("button")
var flag=0
but.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        but.innerHTML="Off"
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = "transparent"
        but.innerHTML="ON"
        flag = 0;
    }
 })



// more than 1 item

// var all = document.querySelectorAll("h1")

// all.forEach(function (e) {
// })



// get all id of same name

// document.getElementById("name_of_id")


// get all class of same name

// document.getElementsByClassName("class_of_name")


