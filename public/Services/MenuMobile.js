
const menu = document.getElementById("menu");
const menucontainer = document.querySelector(".menucontainer");

const burgerimg = document.getElementById("burgermenuimg");

let toggle = true;

menuaction.addEventListener("click", function () {
    menu.classList.toggle("open");
    menucontainer.classList.toggle("open");
    toggle = !toggle;
    if (toggle) {
        burgerimg.src = '/Images/burger.svg';
    }
    else {
        burgerimg.src = '/Images/burgeropen.svg';
    }
});

