 window.addEventListener("load", sidenVises);


 function sidenVises() {
 	console.log("siden vises!");
 	// registrer klik på menu-knap
 	document.querySelector("#menuknap").addEventListener("click", toggleMenu);
 }

 function toggleMenu() {
 	console.log("Toggle menu");
 	document.querySelector("#menu").classList.toggle("hidden");

 	let erSkjult = document.querySelector("#menu").classList.contains("hidden");

 	if (erSkjult == true) {
 		//menuen er nu skjult - ændr menuknap til lll
 		document.querySelector("#menuknap").textContent = "☰";
 		document.querySelector(".grid-container").classList.remove("hidden");

 		// tilføje scroll igen
 		document.querySelector("body").classList.remove("overflow")
 		document.querySelector(".burgermenu").classList.remove("background");;
 	} else {
 		//menuen er nu vist - ændr menuknap til x
 		document.querySelector("#menuknap").textContent = "X"
 		document.querySelector(".grid-container").classList.add("hidden");

 		// fjerne muligheden for at scrolle
 		document.querySelector("body").classList.add("overflow");

 		document.querySelector(".burgermenu").classList.add("background");

 	}
 }






 "use strict"

 let minHistorie = [];




 async function hentJson1() {

 	console.log("hent json 1");

 	let url = "http://patrickpost.dk/kea/kechayas_wp/wordpress/wp-json/wp/v2/generelt/24";

 	let myJson = await fetch(url);

 	minHistorie = await myJson.json();

 	visMinHistorie();
 }


 function visMinHistorie() {

 	console.log("vis min historie");

 	document.querySelector(".tekst p").innerHTML = minHistorie.content.rendered;
 	document.querySelector(".title h2").innerHTML = minHistorie.title.rendered;
 	document.querySelector(".kechayas img").src = minHistorie.billede.guid;

 }

 hentJson1();
