        document.addEventListener("DOMContentLoaded", start);




        function start() {

            "use strict"

            let indlæg = []; // variablen "indlæg" er nu et array





            async function hentJson1() { // i denne variabel hentes json dataen ind

                console.log("hent json 1");
                // definerer "url" til at være et link (med json data)
                let url = "http://patrickpost.dk/kea/kechayas_wp/wordpress/wp-json/wp/v2/blogindlaeg";

                let myJson = await fetch(url); // henter (fetcher) dataen fra "url" og sætter det ind i variablen "myJson"

                indlæg = await myJson.json(); // skal fetche dataen som json data og lægges ind i indlæg arrayet

                visBlogindlæg(); // kalder næste funktion
            }



            function visBlogindlæg() { // i denne funktion vises indhold i html
                console.log("VIS DET SKER");


                let dest = document.querySelector(".blogindlaeg"); // definerer variablen "dest" til at være .blogindlaeg i html dokumentet
                let temp = document.querySelector("template"); // definerer varibalen "temp" til at være templaten i html dokumentet


                indlæg.forEach(indlæg => { // gennemløber arrayet
                    let klon = temp.cloneNode(true).content; // variablen "klon" kloner nu "temp" (templaten) fra html

                    klon.querySelector(".dato").innerHTML = indlæg.dato; // inde i templaten, skal elementet med class'en .dato have content med endpoint dato fra                                                                  json-dataen


                    klon.querySelector(".titel").innerHTML = indlæg.title.rendered; // samme som ovenstående
                    klon.querySelector(".paragraph").innerHTML = indlæg.content.rendered;
                    klon.querySelector(".blog-billede img").src = indlæg.billede.guid;


                    dest.appendChild(klon); // kloner til dest (.blogindlaeg)


                })

            }

            hentJson1();

        }
