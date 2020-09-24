numberSelected = 0
window.onload = function(){
  const peopleLimit = document.getElementById('booking_adults');
    peopleLimit.addEventListener("blur", ($event) => {
    numberSelected = $event.target.value;
    console.log(numberSelected)
    return numberSelected
  })
}
