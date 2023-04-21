const prenom = document.getElementById("customerName").value;
const email = document.getElementById("customerEmail").value;

const msg = document.getElementById("customerNote").value;
const securite = document.getElementById("spamProtection").value;


customerOrder.addEventListener("click", function () {
    if (prenom == "" || email == "" || msg == "" || securite == "") {
        alert("Veuillez complétéz les champs avec le * !");
    } else {
        alert("Envoyez moi un mail : diego.pro.villanueva@gmail.com");
    }
});





