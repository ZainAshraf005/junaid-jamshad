let button = document.getElementById("mybutton");
let icon = document.getElementById("add");
let menu = document.getElementById("num");

button.addEventListener("click",function(){
    menu.classList.toggle("block");
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x")
});

window.onscroll = () => {
    icon.classList.remove("bx-x");
    icon.classList.add("bx-menu");
    menu.classList.remove("block");
}