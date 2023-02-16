
const menu = document.getElementById("menu");
const burgerimg = document.getElementById("burgermenuimg");

let toggle = true;

menuaction.addEventListener("click", function () {
    menu.classList.toggle("open");
    toggle = !toggle;
    if (toggle) {
        burgerimg.src = '/public/Images/burger.svg';
    }
    else {
        burgerimg.src = '/public/Images/burgeropen.svg';
    }
});

