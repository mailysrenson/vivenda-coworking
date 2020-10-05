
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let background = document.getElementById("navbar-container");
    let fontText = document.getElementsByClassName("font-text");
    let menuBarWhite = document.getElementById("menu-btn-white");

console.log(menuBarWhite);
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    background.style.backgroundColor = 'white';
    background.style.borderBottom = 'solid 1px lightgrey';
    fontText[0].classList.add('color-to-black');
    fontText[1].classList.add('color-to-black');
    fontText[2].classList.add('color-to-black');
    fontText[3].classList.add('btn-call');
    menuBarWhite.classList.remove('menu-bar-white')
    menuBarWhite.classList.add('menu-bar-green')

  } else {
    background.style.borderBottom = 'solid 0px lightgrey';
    background.style.backgroundColor = 'transparent';
    fontText[0].classList.remove('color-to-black');
    fontText[1].classList.remove('color-to-black');
    fontText[2].classList.remove('color-to-black');
    fontText[3].classList.remove('btn-call');
    // menuBarWhite.innerHTML = `<img src="menuBarGreen.png" alt="coucou">`
    menuBarWhite.classList.remove('menu-bar-green')
    menuBarWhite.classList.add('menu-bar-white')

  }
}
