// assigning DOM elements to variables
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');

// setting the default values to zero and number of people to one
let bill = 0;
let tipPercentage = 0;
let people = 1;

let tipAmount;

// running the the function when there is an input
billInput.addEventListener('input', function () {
    bill = parseFloat(billInput.value); // skinning the string to become a value
    calculateAmounts();
});

// running the the function when there is an input
peopleInput.addEventListener('input', function () {
    people = parseInt(peopleInput.value); //changing the string input to a number
    calculateAmounts();
});


// looping through the array of percentage buttons with the class of .tipbutton
tipButtons.forEach(button => {
    button.addEventListener('click', function () {
        tipPercentage = parseInt(button.getAttribute('data-tip'));
        tipAmount = tipPercentage;
        calculateAmounts();
    });
});

// logic specific to the custom tip button 
customTipInput.addEventListener('click', function () {
    let tip = prompt('Enter your custom tip', '50%');
    tipPercentage = tip;
    tipPercentage = parseFloat(tipPercentage); // skinning the string to become a value
    calculateAmounts();
});


resetBtn.addEventListener('click', function () {
    billInput.value = '';
    peopleInput.value = '';
    customTipInput.value = '';
    tipPercentage = 0;
    bill = 0;
    people = 1;
    calculateAmounts();
    resetBtn.disabled = true;
});

function calculateAmounts() {
    if (people > 0 && bill > 0 && tipPercentage >= 0) {
        tipAmount = (bill * (tipPercentage / 100)) / people;
        const totalAmount = (bill + tipAmount) / people;

        tipAmountDisplay.textContent = `₦ ${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `₦${totalAmount.toFixed(2)}`;
        resetBtn.disabled = false;
    } else {
        tipAmountDisplay.textContent = "₦0.00";
        totalAmountDisplay.textContent = "₦0.00";
    }
}