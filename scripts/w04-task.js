/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Moroni Bamvakiades Ramos",
    photo : "images/perfil.jpg",
    favoriteFoods : ["Rice", "Chicken"],
    hobbies : ["Music", "Cooking", "Studying", "Being with my family", "Attending The Temple", "Attending The Church", "Working out"],
    placesLived : [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    

    place : "Paranaguá, Paraná, Brazil",   
    length : "27 Years",

});


myProfile.placesLived.push({
    

    place : "Pernambuco, Brazil",   
    length : "1 Year and 6 Months",

});

/* DOM Manipulation - Output */



/* Name */

document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo);

/* Favorite Foods List*/

document.querySelector('#favorite-foods').innerHTML = myProfile.favoriteFoods.map(food => `<li>${food}</li>`).join('');

/* Hobbies List */

document.querySelector('#hobbies').innerHTML = myProfile.hobbies.map(hobby => `<li>${hobby}</li>`).join('');

/* Places Lived DataList */


document.querySelector('#places-lived').innerHTML = myProfile.placesLived.map(place => `<dt>${place.place}</dt><dd>${place.length}</dd>`).join('');
