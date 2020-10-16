window.onload = function(){


let title = document.querySelector(".mapboxgl-ctrl-attrib");
console.log(title)
title.remove();
let title2 = document.querySelector(".mapboxgl-ctrl-logo");
title2.remove();


let praiaPopup = document.getElementsByClassName("praia-icon")
let actiDescription = document.getElementById("acti-description")


let santaComba = document.getElementsByClassName("santa-comba-card")
santaComba = santaComba[0]
santaComba.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `<div class="card card-position card-map " >
     <img src="santaComba.jpg" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">Santa Comba</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`

});

let kayak = document.getElementsByClassName("kayak-card")
kayak = kayak[0]
kayak.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `<div class="card card-position card-map " >
        <img src="kayak.jpg" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">O Pioneiro Do Mondego Kayak tour </h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let rio = document.getElementsByClassName("rio-card")
rio = rio[0]
rio.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
        <img src="rioSalva.jpg" alt="" class="card-img-top card-img-mapbox">

      <div class="card-body">
        <h5 class="card-title">Praya Fluvial Coja</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let casca = document.getElementsByClassName("casca-card")
casca = casca[0]
casca.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
       <img src="casca.jpg" alt="" class="card-img-top card-img-mapbox">

      <div class="card-body">
        <h5 class="card-title">Praya fluvial Cascalheira</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let sera = document.getElementsByClassName("sera-card")
sera = sera[0]
sera.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
       <img src="estrella.jpg" alt="" class="card-img-top card-img-mapbox">

      <div class="card-body">
        <h5 class="card-title">National park Serra da Estrela</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let carvahal = document.getElementsByClassName("carvahal-card")
carvahal = carvahal[0]
carvahal.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
      <img src="caminhos.jpg" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">Caminhos Cruzados Winery</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let quinta = document.getElementsByClassName("quinta-card")
quinta = quinta[0]
quinta.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
       <img src="lemos.jpg" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">Quinta de Lemos</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let fraga = document.getElementsByClassName("fraga-card")
fraga = fraga[0]
fraga.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
      <img src="fraga.jpg" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">Fraga da Pena</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let cabriz = document.getElementsByClassName("cabriz-card")
cabriz = cabriz[0]
cabriz.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
      <img src="cabriz.jpg" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">Quinta de Cabriz</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let vivenda = document.getElementsByClassName("vivenda-card")
vivenda = vivenda[0]
vivenda.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
      <img src="01.JPG" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">Vivenda</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

let avo = document.getElementsByClassName("avo-card")

avo = avo[0]
avo.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position card-map " >
      <img src="avo.jpg" alt="" class="card-img-top card-img-mapbox">
      <div class="card-body">
        <h5 class="card-title">Avo</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});

}
