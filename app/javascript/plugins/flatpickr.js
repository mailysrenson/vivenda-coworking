import flatpickr from "flatpickr";

const initFlatPicker = () => {
    flatpickr(".datepicker-arrival", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "Y-m-d",
    minDate: "today"
  });

  const arrivalDate = document.getElementsByClassName("form-control string required datepicker-arrival input");
  arrivalDate[0].addEventListener("blur", ($event) => {
    if ( arrivalDate[0].value != ""){
    let dateSelected = $event.target.value;
      let [day, month, year] = dateSelected.split("-");
      day = parseInt(day, 10);
      month = parseInt(month, 10) - 1;
      year = parseInt(year, 10);
      let dateDeparture = new Date(year, month, day);
      if (month === 6 || month === 7 ){
      dateDeparture.setDate(dateDeparture.getDate() + 7);
    } else {
      dateDeparture.setDate(dateDeparture.getDate() + 3);
    }
  flatpickr(".datepicker-departure", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "Y-m-d",
    minDate: dateDeparture,
    disable: [ function(date) {
      if (date < dateDeparture ) {
        return true
      }
    } ]
  });
}
});
};

export {initFlatPicker};
