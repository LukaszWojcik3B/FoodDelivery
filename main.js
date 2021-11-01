//// przypisanie nagłówków do zmiennych

let menu0 = document.querySelector("#menu0");
let menu1 = document.querySelector("#menu1");
let menu2 = document.querySelector("#menu2");
let menu3 = document.querySelector("#menu3");
let menu4 = document.querySelector("#menu4");

//// przypisanie list do zmiennych
let burgery = document.querySelector("#burgery");
let kebaby = document.querySelector("#kebaby");
let wloskie = document.querySelector("#wloskie");
let azjatyckie = document.querySelector("#azjatyckie");

//// zmiana koloru po najechaniu na inną zakładkę
//menu0

function menu0Mysznad() {
  document.querySelector("#menu0").style.backgroundColor = "#f2e205";
}

function menu0Myszpod() {
  document.querySelector("#menu0").style.backgroundColor = "#f2e852";
}

menu0.addEventListener("mouseover", menu0Mysznad, false);
menu0.addEventListener("mouseout", menu0Myszpod, false);
//menu1
function menu1Mysznad() {
  document.querySelector("#menu1").style.backgroundColor = "#f2e205";
}

function menu1Myszpod() {
  document.querySelector("#menu1").style.backgroundColor = "#f2e852";
}

menu1.addEventListener("mouseover", menu1Mysznad, false);
menu1.addEventListener("mouseout", menu1Myszpod, false);

//menu2
function menu2Mysznad() {
  document.querySelector("#menu2").style.backgroundColor = "#f2e205";
}

function menu2Myszpod() {
  document.querySelector("#menu2").style.backgroundColor = "#f2e852";
}

menu2.addEventListener("mouseover", menu2Mysznad, false);
menu2.addEventListener("mouseout", menu2Myszpod, false);

//menu3
function menu3Mysznad() {
  document.querySelector("#menu3").style.backgroundColor = "#f2e205";
}

function menu3Myszpod() {
  document.querySelector("#menu3").style.backgroundColor = "#f2e852";
}

menu3.addEventListener("mouseover", menu3Mysznad, false);
menu3.addEventListener("mouseout", menu3Myszpod, false);
//menu4
function menu4Mysznad() {
  document.querySelector("#menu4").style.backgroundColor = "#f2e205";
}

function menu4Myszpod() {
  document.querySelector("#menu4").style.backgroundColor = "#f2e852";
}

menu4.addEventListener("mouseover", menu4Mysznad, false);
menu4.addEventListener("mouseout", menu4Myszpod, false);

// menu click

function menuClick(a) {
  if (a == menu0) {
    document.querySelector("#burgery").style.display = "flex";
    document.querySelector("#kebaby").style.display = "flex";
    document.querySelector("#wloskie").style.display = "flex";
    document.querySelector("#azjatyckie").style.display = "flex";
  } else if (a == menu1) {
    document.querySelector("#burgery").style.display = "flex";
    document.querySelector("#kebaby").style.display = "none";
    document.querySelector("#wloskie").style.display = "none";
    document.querySelector("#azjatyckie").style.display = "none";
  } else if (a == menu2) {
    document.querySelector("#burgery").style.display = "none";
    document.querySelector("#kebaby").style.display = "flex";
    document.querySelector("#wloskie").style.display = "none";
    document.querySelector("#azjatyckie").style.display = "none";
  } else if (a == menu3) {
    document.querySelector("#burgery").style.display = "none";
    document.querySelector("#kebaby").style.display = "none";
    document.querySelector("#wloskie").style.display = "flex";
    document.querySelector("#azjatyckie").style.display = "none";
  } else if (a == menu4) {
    document.querySelector("#burgery").style.display = "none";
    document.querySelector("#kebaby").style.display = "none";
    document.querySelector("#wloskie").style.display = "none";
    document.querySelector("#azjatyckie").style.display = "flex";
  }
}

menu0.addEventListener("click", menuClick0, false);

function menuClick0() {
  menuClick(menu0);
}

menu1.addEventListener("click", menuClick1, false);

function menuClick1() {
  menuClick(menu1);
}

menu2.addEventListener("click", menuClick2, false);

function menuClick2() {
  menuClick(menu2);
}

menu3.addEventListener("click", menuClick3, false);

function menuClick3() {
  menuClick(menu3);
}

menu4.addEventListener("click", menuClick4, false);

function menuClick4() {
  menuClick(menu4);
}

// Dodanie  produktu do koszyka

function dodajProdukt(a, b) {
  dodajElement();
  dodajZdjecie(a);
  dodajOpis(b);
}

function dodajElement() {
  const element = document.createElement("div");
  element.classList.add("dodatki_box-produkty-element");

  const div = document.querySelector(".dodatki_box-produkty");
  div.appendChild(element);
}

// dodawanie rzeczy do elementu

function dodajZdjecie(a) {
  const zdjecie = document.createElement("img");
  zdjecie.classList.add("dodatki_box-produkty-element-zdjecie");

  zdjecie.src = a;
  const div = document.querySelector(".dodatki_box-produkty-element");
  div.appendChild(zdjecie);
}

function dodajOpis(a) {
  const opis = document.createElement("p");
  opis.classList.add("dodatki_box-produkty-element-opis");

  opis.innerText = a;
  const div = document.querySelector(".dodatki_box-produkty-element");
  div.appendChild(opis);
}

function wyswietl(a, b) {
  document.querySelector("#dodatki").style.display = "flex";
  dodajProdukt(a, b);
}

let elementZdj = document.querySelectorAll(".liWybor");

let zdjecia = document.querySelectorAll(".element-zdj");
let tekst = document.querySelectorAll(".produkt-nazwa");

for (let i = 0; i < elementZdj.length; i++) {
  elementZdj[i].addEventListener(
    "click",
    function () {
      zdj1 = zdjecia[i].getAttribute("src");
      tekst1 = tekst[i].innerHTML;
      wyswietl(zdj1, tekst1);
    },
    false
  );
}
