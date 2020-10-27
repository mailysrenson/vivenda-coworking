window.onload = function(){
let title = document.querySelector(".mapboxgl-ctrl-attrib");
title.remove();
let title2 = document.querySelector(".mapboxgl-ctrl-logo");
title2.remove();
let praiaPopup = document.getElementsByClassName("praia-icon")
let actiDescription = document.getElementById("acti-description")
let santaComba = document.getElementsByClassName("santa-comba-card")
let santaCombaDesc = document.getElementsByClassName("santa-comba-desc")

let vivenda = document.getElementsByClassName("vivenda-card")
let vivendaDesc= document.getElementsByClassName("vivenda-desc")
vivenda = vivenda[0]
vivendaDesc = vivendaDesc[0]
vivenda.addEventListener('click', (event) => {
  oldDisplay.style.display = "none"; 
  vivendaDesc.style.display = "block";
  oldDisplay = vivendaDesc
});

let oldDisplay = vivendaDesc

santaComba = santaComba[0]
santaCombaDesc = santaCombaDesc[0]
santaComba.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  santaCombaDesc.style.display = "block";
  oldDisplay = santaCombaDesc
});

let kayak = document.getElementsByClassName("kayak-card")
let kayakDesc = document.getElementsByClassName("kayak-desc")
kayak = kayak[0]
kayakDesc = kayakDesc[0]
kayak.addEventListener('click', (event) => {
  oldDisplay.style.display = "none";
  kayakDesc.style.display = "block";
  oldDisplay = kayakDesc
});

let rio = document.getElementsByClassName("rio-card")
let rioDesc = document.getElementsByClassName("rio-desc")
rio = rio[0]
rioDesc = rioDesc[0]
rio.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  rioDesc.style.display = "block";
  oldDisplay = rioDesc
});

let casca = document.getElementsByClassName("casca-card")
let cascaDesc= document.getElementsByClassName("casca-desc")
casca = casca[0]
cascaDesc = cascaDesc[0]
casca.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  cascaDesc.style.display = "block";
  oldDisplay = cascaDesc
});

let sera = document.getElementsByClassName("sera-card")
let seraDesc= document.getElementsByClassName("sera-desc")
sera = sera[0]
seraDesc = seraDesc[0]
sera.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  seraDesc.style.display = "block";
  oldDisplay = seraDesc
});

let carvahal = document.getElementsByClassName("carvahal-card")
let carvahalDesc= document.getElementsByClassName("carvahal-desc")
carvahal = carvahal[0]
carvahalDesc = carvahalDesc[0]
carvahal.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  carvahalDesc.style.display = "block";
  oldDisplay = carvahalDesc
});

let quinta = document.getElementsByClassName("quinta-card")
let quintaDesc= document.getElementsByClassName("quinta-desc")
quinta = quinta[0]
quintaDesc = quintaDesc[0]
quinta.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  quintaDesc.style.display = "block";
  oldDisplay = quintaDesc
});

let fraga = document.getElementsByClassName("fraga-card")
let fragaDesc= document.getElementsByClassName("fraga-desc")
fraga = fraga[0]
fragaDesc = fragaDesc[0]
fraga.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  fragaDesc.style.display = "block";
  oldDisplay = fragaDesc
});

let cabriz = document.getElementsByClassName("cabriz-card")
let cabrizDesc= document.getElementsByClassName("cabriz-desc")
cabriz = cabriz[0]
cabrizDesc = cabrizDesc[0]
cabriz.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  cabrizDesc.style.display = "block";
  oldDisplay = cabrizDesc
});


let avo = document.getElementsByClassName("avo-card")
let avoDesc= document.getElementsByClassName("avo-desc")
avo = avo[0]
avoDesc = avoDesc[0]
avo.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  avoDesc.style.display = "block";
  oldDisplay = avoDesc
});

let baloico = document.getElementsByClassName("baloico-card")
let baloicoDesc= document.getElementsByClassName("baloico-desc")
baloico = baloico[0]
baloicoDesc = baloicoDesc[0]
baloico.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  baloicoDesc.style.display = "block";
  oldDisplay = baloicoDesc
});


let coimbra = document.getElementsByClassName("coimbra-card")
let coimbraDesc= document.getElementsByClassName("coimbra-desc")
coimbra = coimbra[0]
coimbraDesc = coimbraDesc[0]
coimbra.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  coimbraDesc.style.display = "block";
  oldDisplay = coimbraDesc
});

let aveiro = document.getElementsByClassName("aveiro-card")
let aveiroDesc= document.getElementsByClassName("aveiro-desc")
aveiro = aveiro[0]
aveiroDesc = aveiroDesc[0]
aveiro.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  aveiroDesc.style.display = "block";
  oldDisplay = aveiroDesc
});

let costa = document.getElementsByClassName("costa-card")
let costaDesc= document.getElementsByClassName("costa-desc")
costa = costa[0]
costaDesc = costaDesc[0]
costa.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  costaDesc.style.display = "block";
  oldDisplay = costaDesc
});

let piodao = document.getElementsByClassName("piodao-card")
let piodaoDesc= document.getElementsByClassName("piodao-desc")
piodao = piodao[0]
piodaoDesc = piodaoDesc[0]
piodao.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  piodaoDesc.style.display = "block";
  oldDisplay = piodaoDesc
});


let egua = document.getElementsByClassName("egua-card")
let eguaDesc= document.getElementsByClassName("egua-desc")
egua = egua[0]
eguaDesc = eguaDesc[0]
egua.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  eguaDesc.style.display = "block";
  oldDisplay = eguaDesc
});


let alva = document.getElementsByClassName("alva-card")
let alvaDesc= document.getElementsByClassName("alva-desc")
alva = alva[0]
alvaDesc = alvaDesc[0]
alva.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  alvaDesc.style.display = "block";
  oldDisplay = alvaDesc
});

let azzurro = document.getElementsByClassName("azzurro-card")
let azzurroDesc= document.getElementsByClassName("azzurro-desc")
azzurro = azzurro[0]
azzurroDesc = azzurroDesc[0]
azzurro.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  azzurroDesc.style.display = "block";
  oldDisplay = azzurroDesc
});

let sombri = document.getElementsByClassName("sombri-card")
let sombriDesc= document.getElementsByClassName("sombri-desc")
sombri = sombri[0]
sombriDesc = sombriDesc[0]
sombri.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  sombriDesc.style.display = "block";
  oldDisplay = sombriDesc
});



let mira = document.getElementsByClassName("mira-card")
let miraDesc= document.getElementsByClassName("mira-desc")
mira = mira[0]
miraDesc = miraDesc[0]
mira.addEventListener('click', (event) => { 
  oldDisplay.style.display = "none"; 
  miraDesc.style.display = "block";
  oldDisplay = miraDesc
});


}
