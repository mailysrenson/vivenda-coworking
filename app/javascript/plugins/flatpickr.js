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
const calendar = document.querySelector(".datepicker-arrival");
console.log(calendar)
calendar.addEventListener('input', ($event) => {
  let arrivalDate = document.getElementsByClassName("startRange");
  console.log(arrivalDate)
  let dateSelectedObj = $event.target.value
  console.log(dateSelectedObj)
       let [year, month, day] = dateSelectedObj.split("-");
       day = parseInt(day, 10);
       month = parseInt(month, 10);
       year = parseInt(year, 10);
     let i = 1
   if (month === 6 || month === 7 ){
     let selection = document.getElementsByClassName("startRange");
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
        let selection = arrivalDate[0];
        let selectionPrev = selection;
      while (i < 4) {
        let siblingOne = selection.nextSibling;
        siblingOne.classList.add("flatpickr-disabled");
        let prevSiblingOne = selectionPrev.previousSibling;
        prevSiblingOne.classList.add("flatpickr-disabled");
        selection = siblingOne
        selectionPrev = prevSiblingOne
        i += 1
        console.log(i)
      }
   }

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



});
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
