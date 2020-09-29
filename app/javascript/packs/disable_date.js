const disableDate = () => {
const arrivalDateCalendar = document.getElementById("arrival-date")
const arrivalDate = document.getElementsByClassName("form-control string required datepicker-arrival input");

if (arrivalDate != null) {
  arrivalDate[0].addEventListener("blur", ($event) => {
    const dateSelected = $event.target.value;

})
}
}


// pas oublier d'importer
export { disableDate }
