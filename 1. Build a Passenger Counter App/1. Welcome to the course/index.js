// javascript
//document.getElementById("count-el").innerText = 5

let count = 0 ;
let countEl = document.getElementById("count-el");

function increment(){
    count += 1;
    console.log("Btn clicked");
    countEl.innerText = count;
}

function save(){
    console.log("Count new value is " + count);
}

let greetEl = document.getElementById("greet-el");
greetEl.innerText += " JS";

