numberSelected = 0
window.onload = function(){
  const maxPeople = 5
  const a = {
    adult: 0,
    chidlren: 0
  }
  const formEl = {
    adult: document.getElementById('booking_adults'),
    children: document.getElementById('booking_children')
  }
  // const peopleLimitAdult = document.getElementById('booking_adults');
  // const peopleLimitChildren = document.getElementById('booking_children');

  const updateSelectOptions = (el,seatsLeft) => {
    console.log(el,seatsLeft)
    const childrenEl = el.childNodes
      console.log('p:', childrenEl)
      childrenEl.forEach(childEl => {
        if (childEl.tagName === 'OPTION') {
          console.log(childEl.disabled)
          if (Number(childEl.value) > seatsLeft) {
            childEl.disabled = true
          } else {
            childEl.disabled = false
          }
        }
      })
  }

  const checkNumberPeople = $event => {
    const varName = $event.target.id === 'booking_adults' ? 'adult' : 'children'
    a[varName] =  Number($event.target.value)
    updateSelectOptions(formEl[$event.target.id !== 'booking_adults' ? 'adult' : 'children'],maxPeople - a[varName])
    /*
    if ($event.target.id === 'booking_adults') {
      a.adult = Number($event.target.value)
      const seatsLeft = maxPeople - a.adult
      updateSelectOptions(formEl.children,seatsLeft)


    }else if($event.target.id === 'booking_children') {
      a.children = Number($event.target.value)
      const seatsLeft = maxPeople - a.children
      console.log('place restante:', peopleLimitAdult)
      updateSelectOptions(formEl.adult,seatsLeft)
    }*/
  }

  formEl.adult.addEventListener("change", checkNumberPeople)
  formEl.children.addEventListener("change", checkNumberPeople)

}
