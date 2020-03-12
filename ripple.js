const alleVlakken = document.querySelectorAll('.vlak');
const rimpel = document.createElement('div');
rimpel.classList = 'rimpel';

function maakRipple(e) {
    console.log(e);
}

for(let i=0; i<alleVlakken.length; i++) {
    alleVlakken[i].addEventListener('click', maakRipple);
}