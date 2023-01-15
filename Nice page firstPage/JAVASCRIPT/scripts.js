var menu = document.querySelector(".hamburguer").addEventListener("click", showmenu);
var nav = document.querySelector("nav");
var body = document.querySelector("body");

function showmenu() {
    nav.classList.toggle("shownav");
    body.classList.toggle("bodynm");
}


var card = document.querySelector(".un");
var card2 = document.querySelector(".do");
var pricecard1 = document.querySelector(".price1");
var pricecard2 = document.querySelector(".price2");
var contactscard = document.querySelector(".contacts-card");


function visible(entries) {
    let entry = entries[0]
    if (entry.isIntersecting) {
        card.classList.add("freshpage");
        card2.classList.add("freshpage");
    }
}

let observer = new IntersectionObserver(visible, {});

let sectioncard = document.querySelector(".cards-content");

observer.observe(sectioncard);


function pricev(entri) {
    let entris = entri[0]
    if (entris.isIntersecting) {
        pricecard1.classList.add("freshpage");
        pricecard2.classList.add("freshpage");
    }
}

let observador = new IntersectionObserver(pricev, {});

let pricecont = document.querySelector(".price");

observador.observe(pricecont);


function contact(entr) {
    let ent = entr[0]
    if (ent.isIntersecting) {
        contactscard.classList.add("freshpage");
    }
}

let observadorcito = new IntersectionObserver(contact, {});

let contactus = document.querySelector(".contacts");

observadorcito.observe(contactus);



