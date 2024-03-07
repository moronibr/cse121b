/* W02-Task - Profile Home Page */

console.log("Olá");

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Moroni Bamvakiades Ramos";
let currentYear = 2024;
let profilePicture = "images/perfil.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const imageElement = document.getElementById('picture');
const yearElement = document.querySelector('#year');


/* Step 4 - Adding Content */


nameElement.textContent = fullName;
yearElement.textContent = currentYear;


/* Step 5 - Array */


const favoriteFood = ["Rice", "Chicken", "Chocolate"];
foodElement.innerHTML = favoriteFood.join("<br>");


