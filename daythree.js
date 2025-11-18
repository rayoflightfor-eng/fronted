const box = document.querySelector(".box");
box.style.height = "100px";
box.style.width = "100px";
box.style.background = "red";

const btn = document.querySelector(".btn");

btn.addEventListener("click", function (event){
    console.log("hello");
    box.style.width = "400px";
    box.style.height = "400px";
    box.style.backgroundColor = "blue";
});