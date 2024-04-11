/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

templelist = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(function(temple) {
        var article = document.createElement('article');
        var h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        var img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

   
        article.appendChild(h3);
        article.appendChild(img);

       
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://moronibr.github.io/TemplosBrasil/TemplosBrasil.json');
    templelist = await response.json();
    displayTemples(templelist);
}

/* reset Function */

const reset = () => {
    // Select all <article> elements inside templesElement and remove them
    const articles = templesElement.querySelectorAll('article');
    articles.forEach(article => {
        templesElement.removeChild(article);
    });
};

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById('filtered').value;

    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templelist) });