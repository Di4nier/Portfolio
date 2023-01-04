const header = document.querySelector("header");

const logo = document.getElementsByClassName('Logo');

/* -------------- Sticky Nav ----------------*/

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
  logo.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener('scroll', stickyNavbar);

/* -------------- Reavel Animation ----------------*/

/* INDEX */

let sri = ScrollReveal({
  duration: 3000,
  distance: "150px",

});

sri.reveal(".zone-vitrine", { delay: 600 });
sri.reveal(".vitrine-image", { origin: "top", delay: 700 });
sri.reveal(".vague", { origin: "top", delay: 100 });





/* PROFIL */

let srp = ScrollReveal({
  duration: 2250,
  distance: "60px",
});

srp.reveal(".memario", { origin: "left", delay: 400 });
srp.reveal(".me-exp", { origin: "right", delay: 400 });
srp.reveal(".me-exp-pro", { origin: "left", delay: 400 });
srp.reveal(".me-parcours", { origin: "right", delay: 400 });
srp.reveal(".me-futur", { origin: "left", delay: 400 });



/* BTS */

let srb = ScrollReveal({
  duration: 2250,
  distance: "60px",
});

srb.reveal(".BTS", { origin: "top", delay: 400 });
sri.reveal(".conteudo-geral", { origin: "bottom", delay: 700 });
srb.reveal("#slamicon", { origin: "left", delay: 1000 });
srb.reveal("#sisricon", { origin: "right", delay: 1000 });


/* AP */

sri.reveal(".ap", { origin: "top", delay: 400 });
sri.reveal(".conteudo-geral--2", { origin: "right", delay: 200 });
sri.reveal(".ap-2", { origin: "bottom", delay: 500 });

/* VT */

sri.reveal(".VeilleTech", { origin: "top", delay: 400 });



/* ARTICLES */

sri.reveal(".page-article", { origin: "top", delay: 400 });


/* STAGE */

sri.reveal(".stages", { origin: "top", delay: 400 });


/* -------------- SLIDER ----------------*/


var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);

setTimeout(function () {
  $conteudoGeral.classList.remove("js-conteudo-geral");
}, 200);

$conteudoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caixa-conteudo-ativo")) return;
    $conteudoGeral.classList.add("caixa--componente-ativo");
    this.classList.add("caixa-conteudo-ativo");
  });
});

$botoesDeFechar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".componente.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  });
});

/* -------------- SLIDER 2 ----------------*/

var $conteudoGeral2 = document.querySelector(".conteudo-geral--2");
var $conteudoEmArray2 = [].slice.call(document.querySelectorAll(".componente--2"));
var $botoesDeFechar2 = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar--2")
);

setTimeout(function () {
  $conteudoGeral2.classList.remove("js-conteudo-geral--2");
}, 200);

$conteudoEmArray2.forEach(function ($componente2) {
  $componente2.addEventListener("click", function () {
    if (this.classList.contains("caixa-conteudo-ativo--2")) return;
    $conteudoGeral2.classList.add("caixa--componente-ativo--2");
    this.classList.add("caixa-conteudo-ativo--2");
  });
});

$botoesDeFechar2.forEach(function ($btn2) {
  $btn2.addEventListener("click", function (e2) {
    e2.stopPropagation();
    $conteudoGeral2.classList.remove("caixa--componente-ativo--2");
    document
      .querySelector(".componente--2.caixa-conteudo-ativo--2")
      .classList.remove("caixa-conteudo-ativo--2");
  });
});

/* -------------- MOODALLLLLL ----------------*/



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
} 



