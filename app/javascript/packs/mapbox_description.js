window.onload = function(){
let praiaPopup = document.getElementsByClassName("praia-icon")
let actiDescription = document.getElementById("acti-description")
praiaPopup = praiaPopup[0]
praiaPopup.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `    <div class="">
      <div class="card card-position style="max-height: 33rem;"" >
      <img src="https://static.natgeo.pt/files/styles/image_3200/public/praias-fluviais-loriga-1.jpg?w=710&h=414g" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Praia fluvial do caneiro</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>
  </div>`
});

let cojaPopup = document.getElementsByClassName("coja-icon")
cojaPopup = cojaPopup[0]
cojaPopup.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `    <div class="">
      <div class="card card-position style="max-height: 33rem;"" >
      <img src="https://live.staticflickr.com/8140/28780826983_ae0c29dbe8_c_d.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Coja</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>
  </div>`
});

let trail01Popup = document.getElementsByClassName("trail01-icon")
trail01Popup = trail01Popup[0]
trail01Popup.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `    <div class="">
      <div class="card card-position style="max-height: 33rem;"" >
      <img src="https://img3.oastatic.com/img2/51216872/834x417r/acor-mountain-mtb-centre.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Trail 01</h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>
  </div>`
});

let vivendaPopup = document.getElementsByClassName("vivenda-icon")
vivendaPopup = vivendaPopup[0]
vivendaPopup.addEventListener('click', (event) => { 
  actiDescription.innerHTML = `      <div class="card card-position" style="max-height: 33rem;" >
      <img src="https://img3.oastatic.com/img2/51216872/834x417r/acor-mountain-mtb-centre.jpg" class="card-img-top" alt="...">

      <div class="card-body">
        <h5 class="card-title">Bem vindo a Vivenda a Nossa Coroa </h5>
        <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dicta excepturi at quo
          ipsum quibusdam sit, aliquam fugiat reiciendis dolor exercitationem. Amet voluptatibus
            sequi facilis corrupti distinctio quibusdam similique molestias.</p>
      </div>
    </div>`
});


}
