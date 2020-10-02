
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let background = document.getElementById("navbar-container");
    let fontText = document.getElementsByClassName("font-text");
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    background.style.backgroundColor = 'white';
    background.style.borderBottom = 'solid 1px lightgrey';
    fontText[0].classList.add('color-to-black');
    fontText[1].classList.add('color-to-black');
    fontText[2].classList.add('color-to-black');
    fontText[3].classList.add('btn-call');
  } else {
    background.style.borderBottom = 'solid 0px lightgrey';
    background.style.backgroundColor = 'transparent';
    fontText[0].classList.remove('color-to-black');
    fontText[1].classList.remove('color-to-black');
    fontText[2].classList.remove('color-to-black');
    fontText[3].classList.remove('btn-call');
  }
}
