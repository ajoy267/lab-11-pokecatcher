import pokemon from '../data/pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';

const homepage = document.getElementById('homepage');

homepage.addEventListener('click', () => {
    localStorage.removeItem('POKEDEX');
});


const results = getPokedex();

const main = document.getElementById('main');

for (let item of results) {
    const pokes = findById(item.id, pokemon);

    const container = document.createElement('div');
    container.classList.add('results-container');

    const img = document.createElement('img');
    img.src = pokes.url_image;

    const header = document.createElement('h3');
    header.textContent = pokes.pokemon;

    const div = document.createElement('div');
    div.classList.add('results-body');

    const p = document.createElement('p');
    p.classList.add('results-text');

    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encountered: ${item.encountered} `;

    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Captured: ${item.captured} `;

    p.append(resultsSpan1, resultsSpan2);
    div.append(img, p);
    container.append(header, div);
    main.append(container);
}


const names = results.map((item) => {
    const pokes = findById(item.id, pokemon);
    return pokes.pokemon;
});

const captured = results.map(item => item.captured);

var ctx = document.getElementById('resultsChart').getContext('2d');

// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Captured',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});