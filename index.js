
let val = document.getElementById("val") 
let content = document.getElementById("content") 
let mode = false 
let cardWrapper = document.querySelector(".card__wrapper") 
let elTemplate = document.querySelector("#template").content 
 
  
  
function renderArr(arr, list) {  
    arr.map(item => {  
        let cloneTemplate = elTemplate.cloneNode(true)  
  
        cloneTemplate.querySelector("img").src = item.thumbnail  
        cloneTemplate.querySelector("h2").textContent = item.title 
        cloneTemplate.querySelector("h4").textContent = item.price  
        cloneTemplate.querySelector("h1").textContent = item.rating  
 
        list.appendChild(cloneTemplate)  
    })  
}  
function fetchDate() {  
    fetch("https://dummyjson.com/products")  
        .then(res => res.json())  
        .then(data => renderArr(data.products, cardWrapper))  
}  
  
fetchDate() 
 
 
// dark 
 
function darkMode(){ 
    mode = !mode 
 
    if(mode == true){ 
        val.style.animationName = "darkMode" 
        val.style.backgroundColor = "black" 
        content.style.backgroundColor = "rgb(245, 245, 245)" 
        document.body.style.backgroundColor = "black" 
        document.body.style.color = "white" 
    } else { 
        val.style.animationName = "darkMode2" 
        val.style.backgroundColor = "white" 
        content.style.backgroundColor = "black" 
        document.body.style.backgroundColor = "white" 
        document.body.style.color = "black" 
    } 
}