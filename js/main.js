let a = document.querySelector(".menu__mobile");
let b = document.querySelector(".burger__click");
b.addEventListener("click",function(){
    a.classList.remove("no-active");
})
let c = document.querySelector(".close");
c.addEventListener("click",function(){
    a.classList.add("no-active");
}) 