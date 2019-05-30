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

 document.addEventListener('scroll', timeline);

 function timeline() {
     // 	var threshold_position = window.scrollY + window.innerHeight * 2 / 3;
     var threshold_position = window.scrollY + window.innerHeight * 2 / 3;
     //compare scrolltop with scrolltop on each timeline event
     var timeline_events = document.querySelectorAll('.timeline li');
     for (i in timeline_events) {
         if (timeline_events[i].offsetTop < threshold_position) {
             timeline_events[i].classList.add('visible');
         } else {
             timeline_events[i].classList.remove('visible');
         }
     }
 }
 timeline();
