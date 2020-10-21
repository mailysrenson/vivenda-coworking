
const scriptURL = 'https://script.google.com/macros/s/AKfycbxaXayx-k9wJ5WKYFfqNn8v2EXrsVzaBwAbNTqQYIpPyo0Akxg/exec'
// const form = document.querySelector("#msform");
let submitButton = document.querySelector(".submit-button");
console.log("coucou")
submitButton.addEventListener('submit', e => {
  e.preventDefault();
  // fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //   .then(response => console.log('Success!', response))
  //   .catch(error => console.error('Error!', error.message))
    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})

})

