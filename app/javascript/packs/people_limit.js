numberSelected = 0
  const maxPeople = 5
  const a = {
    adult: 0,
    chidlren: 0
  }
  const formEl = {
    adult: document.getElementById('booking_adults'),
    children: document.getElementById('booking_children')
  }
  function updateSelectOptions(el, seatsLeft) {
    const childrenEl = el.childNodes
    childrenEl.forEach(childEl => {
      if (childEl.tagName === 'OPTION') {
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
  }
  formEl.adult.addEventListener("change", checkNumberPeople)
  formEl.children.addEventListener("change", checkNumberPeople)
