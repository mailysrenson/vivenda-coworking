let screen = window.screen.width
if ( window.screen.width > 1050) {
let grid = document.getElementById('waterfall-container');
let grid2 = document.getElementById('waterfall-container-2');
let gridWidth = grid.clientWidth;
let card = document.getElementsByClassName('card-img-waterfall');
card = card[0]
let cardWidth = card.clientWidth;
let moveNumb = ( ( gridWidth - (cardWidth * 2 ) ) / 2 )
grid.style.marginLeft = `${moveNumb}px`;
grid2.style.marginLeft = `${moveNumb}px`;
}
