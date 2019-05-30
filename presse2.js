        document.addEventListener("DOMContentLoaded", start);




        function start() {

            "use strict"

            let pressebillede = [];





            async function hentJson1() {

                console.log("hent json 1");

                let url = "http://patrickpost.dk/kea/kechayas_wp/wordpress/wp-json/wp/v2/presse";

                let myJson = await fetch(url);
                pressebillede = await myJson.json();

                visPressebilleder();
            }



            function visPressebilleder() {
                console.log("pressebilleder");


                let dest = document.querySelector(".column");
                let temp = document.querySelector("template");


                indlæg.forEach(pressebillede => {
                    let klon = temp.cloneNode(true).content;
                    //
                    //                    klon.querySelector(".dato").innerHTML = pressebillede.dato;
                    //                    klon.querySelector(".titel").innerHTML = pressebillede.title.rendered;
                    //                    klon.querySelector(".paragraph").innerHTML = pressebillede.content.rendered;
                    //                    console.log(pressebillede);

                    klon.querySelector(".img-container img").src = pressebillede.billede.guid;


                    dest.appendChild(klon);


                })

            }

            hentJson1();

        }
