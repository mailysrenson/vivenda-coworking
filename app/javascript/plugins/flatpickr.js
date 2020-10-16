import flatpickr from "flatpickr";
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
// datepicker-arrival flatpickr-calendar

let dateDeparture
const calendar = document.querySelector(".flatpickr-days");
calendar.addEventListener('click', ($event) => {
  setTimeout(test, 50);
  function test() {
  let arrivalDate = document.querySelector(".startRange");
  console.log(arrivalDate)
  let arrivalMonth = arrivalDate.getAttribute('aria-label')
       let [month, day, year] = arrivalMonth.split(" ");
       console.log(month)
     let i = 1
   if (month === "July" || month === "August" ){
     let selection = document.querySelector(".startRange");
     let selectionPrev = selection;
     while (i < 8) {
        let siblingOne = selection.nextSibling;
        siblingOne.classList.add("flatpickr-disabled");
        let prevSiblingOne = selectionPrev.previousSibling;
        prevSiblingOne.classList.add("flatpickr-disabled");
        selection = siblingOne
        selectionPrev = prevSiblingOne
        i += 1
     }
   } else {
    let selectDay = document.getElementsByClassName(".startRange");
        let selection = arrivalDate;
        let selectionPrev = selection;
      while (i < 4) {
        let siblingOne = selection.nextSibling;
        siblingOne.classList.add("flatpickr-disabled");
        let prevSiblingOne = selectionPrev.previousSibling;
        prevSiblingOne.classList.add("flatpickr-disabled");
        selection = siblingOne
        selectionPrev = prevSiblingOne
        i += 1
      }
    }
        let rangeDiv = document.querySelector("#arrival-date");
    let range = rangeDiv.getAttribute('value')
    let dateSeparator = range.split(" to ");
    let dateArrival = dateSeparator[0]
    let dateDeparture = dateSeparator[1]
    let arrivalInput = document.querySelector("#arrival-date-input");
    arrivalInput.setAttribute("value", dateArrival);
    let departureInput = document.querySelector("#departure-date-input");
    departureInput.setAttribute("value", dateDeparture);
    }
  });

// ------------------- range to dates ---------------------------


    // let selection = document.querySelector(".startRange")
    // let siblingOne = selection.nextSibling;
    // siblingOne.classList.add("flatpickr-disabled");
    // let siblingTwo = siblingOne.nextSibling;
    // siblingTwo.classList.add("flatpickr-disabled");
    // let siblingThree = siblingTwo.nextSibling;
    // siblingThree.classList.add("flatpickr-disabled");
    // let prevSiblingOne = selection.previousSibling;
    //  prevSiblingOne.classList.add("flatpickr-disabled");
    // let prevSiblingTwo = prevSiblingOne.previousSibling;
    // prevSiblingTwo.classList.add("flatpickr-disabled");
    // let prevSiblingThree = prevSiblingTwo.previousSibling;
    // prevSiblingThree.classList.add("flatpickr-disabled");




// <span class="flatpickr-day notAllowed" aria-label="October 15, 2020" tabindex="-1">15</span>






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
