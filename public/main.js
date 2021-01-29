console.log("console log from main.js")

const KeyValue = document.getElementById("keyValue");
const KeyCode = document.getElementById("keyCode");
const CharCode = document.getElementById("charCode");
const Heading = document.getElementById("heading");
const Key = document.getElementsByClassName("key");


// window.addEventListener("keypress", (event) => {
//     Heading.innerHTML = event.keyCode;
// })


window.addEventListener("keypress", (event) => {
    KeyValue.innerHTML = event.key;
})

window.addEventListener("keypress", (event) => {
    let str = event.key;
    KeyCode.innerHTML = "Key" + str.toUpperCase();
    console.log(event.key);
})

window.addEventListener("keypress", (event) => {
    CharCode.innerHTML = event.keyCode;
})


function randomColour() {
    return Math.floor(Math.random() * 256);
}
function changeColour() {
    let red = randomColour();
    let green = randomColour();
    let blue = randomColour();
    let colour = `rgb(${red},${green},${blue})`;
    Key.style.colour = colour;
}