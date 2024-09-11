"use strict";
const zenek = [];
fetch('https://eskuvo-anett.nemestamas.hu/api/youtube/')
    .then(response => response.json())
    .then(data => {
    data.forEach((zene) => zenek.push(zene));
    const zenekTarolo = document.querySelector('#zenek');
    if (zenekTarolo) {
        zenek.forEach(zene => {
            const tarolo = document.createElement('div');
            tarolo.className = 'zene';
            tarolo.style.backgroundImage = `url(${zene.imageurl})`;
            zenekTarolo.appendChild(tarolo);
        });
    }
})
    .catch(err => console.error(`Valami baj van: ${err}`));
console.log(zenek);
