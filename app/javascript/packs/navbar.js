
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let background = document.getElementById("navbar-container");
    let fontText = document.getElementsByClassName("font-text");
    let menuBarWhite = document.getElementById("menu-btn-white");


console.log(menuBarWhite);
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    background.classList.remove('navbar-trans')
    background.classList.add('navbar-white')


    fontText[0].classList.remove('color-to-white');
    fontText[1].classList.remove('color-to-white', 'vivenda-size-big');
    fontText[2].classList.remove('color-to-white', 'nossa-size-big');

    fontText[0].classList.add('color-to-green');
    fontText[1].classList.add('color-to-green', 'vivenda-size-small');
    fontText[2].classList.add('color-to-green', 'nossa-size-small');
    fontText[3].classList.add('btn-call');

    menuBarWhite.classList.remove('menu-bar-white');
    menuBarWhite.classList.add('menu-bar-green');


  } else {
    background.classList.remove('navbar-white')
    background.classList.add('navbar-trans')
    fontText[0].classList.remove('color-to-green');
    fontText[1].classList.remove('color-to-green', 'vivenda-size-small');
    fontText[2].classList.remove('color-to-green', 'nossa-size-small');
    fontText[0].classList.add('color-to-white');
    fontText[1].classList.add('color-to-white', 'vivenda-size-big');
    fontText[2].classList.add('color-to-white', 'nossa-size-big');
    fontText[3].classList.remove('btn-call');
    // menuBarWhite.innerHTML = `<img src="menuBarGreen.png" alt="coucou">`
    menuBarWhite.classList.remove('menu-bar-green');
    menuBarWhite.classList.add('menu-bar-white');

  }
}
