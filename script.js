const billInput = document.getElementById('bill-input')
const tipResult = document.getElementById('tip-result')
const totalBill = document.getElementById('total-result')
const numPep = document.getElementById('people')
const customTipInput = document.querySelector('.custom'); // Your custom tip input
const resetAll = document.getElementById('reset');

let billAmount = 0;
let tipPercent = 0;

billInput.addEventListener('input', (e) => {
  billAmount = parseFloat(e.target.value) || 0;
   console.log("bill amount1 " + billAmount);
   calculateTip();
});

numPep.addEventListener('input', () => {
  calculateTip();
})

const tipButtons = document.querySelector('.tip-btns');


tipButtons.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
     document.querySelectorAll('.tip-btns button').forEach(btn => {
      btn.classList.remove('active');
     })

      e.target.classList.add('active');


    tipPercent = parseFloat(e.target.dataset.tip);
    customTipInput.value = '';
    calculateTip();
  }
})

customTipInput.addEventListener('input', (e) => {
  tipPercent = parseFloat(e.target.value) || 0;
  calculateTip();
})

function calculateTip() {
  const numberOfPeople = parseFloat(numPep.value) || 1;

  if (billAmount && tipPercent && numberOfPeople) {
    const tipAmount = (billAmount * tipPercent) / 100;

    const totalAmount = billAmount + tipAmount;

    const tipPerPerson = tipAmount / numberOfPeople;

    const totalPerPerson = totalAmount / numberOfPeople;

    tipResult.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalBill.textContent = `$${totalPerPerson.toFixed(2)}`

    console.log("Tip per person:", tipPerPerson);
    console.log("Total per person:", totalPerPerson);
  }
}


resetAll.addEventListener('click', (e) => {
   tipResult.textContent = "$0.00";
   totalBill.textContent = "$0.00";
   billInput.value = '';
   numPep.value = '';
   customTipInput.value = '';
   tipPercent = 0;
   billAmount = 0;

   document.querySelectorAll('.tip-btns .btn').forEach(btn => {
    btn.classList.remove('active');
   })


})