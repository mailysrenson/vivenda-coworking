window.onload = function(){

let firstValidation = document.querySelector(".first-validation");
let firstInfo = document.querySelector(".first_info");
let firstField = firstInfo.firstElementChild;
let secondInfo = document.querySelector(".second_info");
let secondField = secondInfo.firstElementChild;
let missingDate = document.querySelector(".missing_date");
let missingPeople = document.querySelector(".missing_people");
let submitButton = document.querySelector(".submit-button");
let returnBtn = document.querySelector(".action-button-previous");
let personnalInfo = document.querySelector("#personal")
let confirmInfo = document.querySelector("#confirm")
let validationWindow = document.querySelector(".validation-window")
let validationField = validationWindow.firstElementChild;
let departureInput = document.querySelector(".datepicker-disable")
let arrivalInput = document.querySelector(".datepicker-departure")
let rangeDate = document.querySelector(".datepicker-arrival")

rangeDate = rangeDate.nextSibling;
missingDate.style.display = "none";
missingPeople.style.display = "none";
firstField.style.display = "block";
secondField.style.display = "none";
validationField.style.display = "none";


const regexDate = RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);

let amountChildren = document.querySelector("#booking_children")
let amountAdult = document.querySelector("#booking_adults")

if (arrivalInput.value != false) {
  rangeDate.placeholder = `${departureInput.value} to ${arrivalInput.value}`
}

firstValidation.addEventListener('click', ($event) => {
  let arrivalInput = document.querySelector("#arrival-date-input");
  arrivalInput = arrivalInput.value
  let departureInput = document.querySelector("#departure-date-input");
  departureInput = departureInput.value

  if ( regexDate.test(arrivalInput) === true && regexDate.test(departureInput) === true ) {
      missingPeople.style.display = "none";
    if ((Number(amountChildren.value) + Number(amountAdult.value)) > 0 ) {
      missingDate.style.display = "none";
      firstField.style.display = "none";
      secondField.style.display = "block";
      personnalInfo.classList.add("active");

    } else {
      missingPeople.style.display = "block";
      if ( regexDate.test(arrivalInput) === true && regexDate.test(departureInput) === true ) {
        missingDate.style.display = "none";
      }
    }
  } else {
      missingDate.style.display = "block";
      if ((Number(amountChildren.value) + Number(amountAdult.value)) === 0 ) {
        missingPeople.style.display = "block";
      } else {
        missingPeople.style.display = "none";
      }
    }
  })

  returnBtn.addEventListener('click', ($event) => {
    firstField.style.display = "block";
    secondField.style.display = "none";
    personnalInfo.classList.remove("active");
  })

let fullForm = document.querySelector("#msform")
 fullForm.addEventListener('submit', e => {
    console.log("popup")
    setTimeout(popup, 100);
    function popup () {
    Swal.fire({
      position: 'center',
      icon: 'success',
      //title: 'Votre réservation a bien été enregistrée',
      showConfirmButton: false,
      timer: 5000
    })
    }
  })


submitButton.addEventListener('click', ($event) => {
  // firstField.style.display = "none";
  // secondField.style.display = "none";
  // validationField.style.display = "block";
  personnalInfo.classList.add("active");
  confirmInfo.classList.add("active");

})


if (arrivalInput.value != false){
  setTimeout(test, 50);
  function test(){
  firstField.style.display = "none";
  secondField.style.display = "block";
  validationField.style.display = "none";
  }
}
}
