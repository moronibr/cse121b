/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);


    document.querySelector('#sum').value = add(addNumber1, addNumber2);
   

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(subtract1, subtract2){

    return subtract1 - subtract2;

}

function subtractNumbers(){

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);


}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

function multiply(factor1, factor2){

    return factor1 * factor2;

}

function multiplyNumbers(){
    
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);

}


document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(dividend, divisor){

    return dividend / divisor;

}

function divideNumbers(){

    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}


document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */


var subtotalElement = document.getElementById("subtotal");
var membershipCheckbox = document.getElementById("member");
var totalElement = document.getElementById("total");


function calculateTotal() {

    var subtotal = parseFloat(subtotalElement.value);
    
    var discountApplied = membershipCheckbox.checked;
    
   
    if (discountApplied) {
        subtotal *= 0.8; 
    }
    

    subtotal = Math.round(subtotal * 100) / 100;
    
    totalElement.textContent = `$${subtotal.toFixed(2)}`;
}


var getTotalButton = document.getElementById("getTotal");
getTotalButton.addEventListener("click", calculateTotal);



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let arrayElement = document.getElementById("array");

arrayElement.textContent = numbersArray.join(", ");

/* Output Odds Only Array */

let oddNumbers = numbersArray.filter(function(number) {
    return number % 2 !== 0;
});


let oddsElement = document.getElementById("odds");
oddsElement.textContent = oddNumbers.join(", "); 

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(", ");

/* Output Sum of Org. Array */


document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(", ");

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);