const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
let customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');

let bill = 0;
let tipPercentage = 0;
let people = 1;

let tipAmount



billInput.addEventListener('input', function () {
    bill = parseFloat(billInput.value);
    calculateAmounts();
});

peopleInput.addEventListener('input', function () {
    people = parseInt(peopleInput.value);
    calculateAmounts();
});



tipButtons.forEach(button => {
    button.addEventListener('click', function () {
        tipPercentage = parseInt(button.getAttribute('data-tip'));
        tipAmount = tipPercentage;
        calculateAmounts();
    });
});

customTipInput.addEventListener('click', function (event) {
    event.preventDefault();
    let tip = prompt('Enter your custom tip', '50%');
    tipPercentage = tip;
    tipPercentage = parseFloat(tipPercentage);
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

        tipAmountDisplay.textContent = `$ ${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
        resetBtn.disabled = false;
    } else {
        tipAmountDisplay.textContent = "$0.00";
        totalAmountDisplay.textContent = "$0.00";
    }
}