type Zene = {
    id: number;
    title: string;
    approved: boolean | null;
    link: string;
    date: string;
    proponent: string | null;
    imageurl: string;
}

const zenek: Zene[] = [];

fetch('https://eskuvo-anett.nemestamas.hu/api/youtube/')
    .then(response => response.json())
    .then(data => {
        data.forEach((zene: Zene) => zenek.push(zene));

        const zenekTarolo = document.querySelector('#zenek') as HTMLDivElement;
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
