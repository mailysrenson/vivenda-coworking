window.onload = function(){
let praiaPopup = document.getElementsByClassName("praia-icon")
let actiDescription = document.getElementById("acti-description")




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
