let santaCombaFly = document.getElementsByClassName('santa-comba-card')
santaCombaFly[0].addEventListener('click', function () {
map.flyTo({
center: [-8.1597634,
40.3924813 + 0.15],
zoom: 9,
essential: true
});
});

let sera = document.getElementsByClassName('sera-card')
sera[0].addEventListener('click', function () {
map.flyTo({
center: [-7.6355217,
40.333333 + 0.15],
zoom: 9,
essential: true
});
});

