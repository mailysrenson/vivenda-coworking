const disableDate = () => {
const arrivalDateCalendar = document.getElementById("arrival-date")
const arrivalDate = document.getElementsByClassName("form-control string required datepicker input");

if (arrivalDate != null) {
  arrivalDate[0].addEventListener("blur", ($event) => {
    const dateSelected = $event.target.value;
    console.log(dateSelected)

  // Verifier si dateSeleted est en juillet - aout
  // {
  /*  dateFormat: "Y-m-d",
  true
    disable: [
        {
            from: "2025-04-01", from arrival date
            to: "2025-05-01" until arrival date +7
        },
        {
            from: "2025-09-01", from arival date
            to: "2025-12-01" until arrival date +3
        }
    ]
} */
})
}
}
// pas oublier d'importer
export { disableDate }
