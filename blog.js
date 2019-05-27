        document.addEventListener("DOMContentLoaded", start);




        function start() {

            "use strict"

            let indlæg = [];





            async function hentJson1() {

                console.log("hent json 1");

                let url = "http://patrickpost.dk/kea/kechayas_wp/wordpress/wp-json/wp/v2/blogindlaeg";

                let myJson = await fetch(url);
                indlæg = await myJson.json();

                visBlogindlæg();
            }



            function visBlogindlæg() {
                console.log("VIS DET SKER");


                let dest = document.querySelector(".blogindlaeg");
                let temp = document.querySelector("template");


                indlæg.forEach(indlæg => {
                    let klon = temp.cloneNode(true).content;

                    klon.querySelector(".dato").innerHTML = indlæg.dato;
                    klon.querySelector(".titel").innerHTML = indlæg.title.rendered;
                    klon.querySelector(".paragraph").innerHTML = indlæg.content.rendered;
                    klon.querySelector(".post1_billede").src = indlæg.billede.guid;


                    dest.appendChild(klon);


                })

            }

            hentJson1();

        }
