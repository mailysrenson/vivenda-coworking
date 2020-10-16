import flatpickr from "flatpickr";
const initFlatPicker = () => {
    flatpickr(".datepicker-arrival", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    inline: true,
    mode: "range"
  });
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
};
export {initFlatPicker};















