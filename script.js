/*
let kostka = Math.floor(Math.random() * 6) + 1;
document.body.innerHTML += (kostka)
*/

const cenaListku = 12
const pocetNavstevniku = 174
const pocetPredstaveni = 15
const prijem = cenaListku*pocetNavstevniku*pocetPredstaveni
const prijemStudenti = (0.4*(pocetNavstevniku))*(0.65*(cenaListku))
const prijemOstatni = (0.6*(pocetNavstevniku)) * cenaListku
const prijemSeStudenty = pocetPredstaveni *(prijemOstatni + prijemStudenti)
const rozdil = prijem - prijemSeStudenty
document.body.innerHTML += rozdil