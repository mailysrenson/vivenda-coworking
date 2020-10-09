import flatpickr from "flatpickr";

let dateDeparture
const calendar = document.querySelector(".datepicker-arrival");
calendar.addEventListener('input', ($event) => {
  const arrivalDate = document.getElementsByClassName("startRange");
  let dateSelectedObj = $event.target.value

      let test = document.querySelector(".startRange")
     let siblingOne = test.nextSibling;
     siblingOne.classList.add("flatpickr-disabled");
    let siblingTwo = siblingOne.nextSibling;
    siblingTwo.classList.add("flatpickr-disabled");
    let siblingThree = siblingTwo.nextSibling;
    siblingThree.classList.add("flatpickr-disabled");


 let arrivalDateObj = $event.target.value
      if (arrivalDateObj != ""){
     let dateSelected = $event.target.value;
       let [year, month, day] = dateSelected.split("-");
       day = parseInt(day, 10);
       month = parseInt(month, 10) - 1;
       year = parseInt(year, 10);
       dateDeparture = new Date(year, month, day);
       if (month === 6 || month === 7 ){
     dateDeparture.setDate(dateDeparture.getDate() + 7);
   } else {
     dateDeparture.setDate(dateDeparture.getDate() + 3);
   }
  }
});
// <span class="flatpickr-day notAllowed" aria-label="October 15, 2020" tabindex="-1">15</span>
const initFlatPicker = () => {
    flatpickr(".datepicker-arrival", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    inline: true,
    mode: "range"
    // disable: [ function(date) {
    //   if (date < dateDeparture)
    //    return true
    //   }]
  });


//   arrivalDate[0].addEventListener("blur", ($event) => {
//    console.log(arrivalDate)
//     if ( arrivalDate[0].value != ""){
//     let dateSelected = $event.target.value;
//       let [day, month, year] = dateSelected.split("-");
//       day = parseInt(day, 10);
//       month = parseInt(month, 10) - 1;
//       year = parseInt(year, 10);
//       let dateDeparture = new Date(year, month, day);
//       if (month === 6 || month === 7 ){
//       dateDeparture.setDate(dateDeparture.getDate() + 7);
//     } else {
//       dateDeparture.setDate(dateDeparture.getDate() + 3);
//     }
//   flatpickr(".datepicker-departure", {
//     altInput: true,
//     altFormat: "d-m-Y",
//     dateFormat: "Y-m-d",
//     minDate: dateDeparture,
//     disable: [ function(date) {
//       if (date < dateDeparture ) {
//         return true
//       }
//     } ]
//   });
// }
// });
};

export {initFlatPicker};
