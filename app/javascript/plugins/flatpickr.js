import flatpickr from "flatpickr";

const initFlatPicker = () => {
    flatpickr(".datepicker-arrival", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    inline: true,
    mode: "range",
    disable: [function(date) {
      let result = rangeDisable(date)
      console.log(`result `, result)
        return result;
    }]
  });

const calendar = document.querySelector(".flatpickr-input");
let dateDeparture
calendar.addEventListener('input', ($event) => {
  const arrivalDateObject = document.querySelector(".flatpickr-day.selected.startRange");
  let arrivalDate = arrivalDateObject.dateObj;
    if ( arrivalDate != ""){
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
    };
    };

});
function rangeDisable(date) {
  console.log(`Departure`, dateDeparture)
  console.log(`Date`, date)
  if (date < dateDeparture ) {
    console.log(`dans if`)
         return true;
    }
}
//   arrivalDate[0].addEventListener("blur", ($event) => {
//    console.log(arrivalDate)
//   flatpickr(".datepicker-", {
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
