const billInput = document.getElementById('billInput')
const peopleInput = document.getElementById('peopleInput')
const btnTips = [...document.querySelectorAll('.tip')]
const btnCustom = document.getElementById('custom')
const inputWrapper = document.querySelector('.input-wrapper')
const inputValue = document.querySelector('.input-value')
const borderNumberPeople = document.querySelector('.borderNumberPeople')
const peopleLabelBox = document.querySelector('.people-label-box')
const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')
const reset = document.getElementById('btn-reset')


let tips
let custom
let numberPerson
let bill

let emptyFieldExecuted = null

const btnReset = () =>{
    reset.addEventListener('click', () => {

        billInput.value = '';
        btnCustom.value = '';
        peopleInput.value = '';


        tipAmount.innerHTML = '$0';
        totalAmount.innerHTML = '$0';

        btnTips.forEach((btn) => {
            btn.style.backgroundColor = 'hsl(183, 100%, 15%)';
       
        });
        custom = '';
        tips = null;
        selectedBtn = null;  
        window.location.reload()
    });
}

let label
const emptyField = () => {
      //Change border of input 
      inputWrapper.style.border = '2px solid #E17457'
      borderNumberPeople.style.border = '2px solid #E17457'

      //Create a new label for both inputs
      label = document.createElement('label')
      label.innerHTML = "Can't be zero"
      label.style.color = '#E17457'

      peopleLabelBox.appendChild(label)
      peopleLabelBox.style.display = 'flex'
      peopleLabelBox.style.justifyContent = 'space-between';
      peopleLabelBox.style.width = '100'

      btnTips.forEach((btn) =>{
        btnTips.value = ''
        btn.style.backgroundColor = 'hsl(183, 100%, 15%)'
    })

      bill = ''
      tips = ''
      custom = ''
      emptyFieldExecuted = true
}

const filledField = () => {
    //Change border of input 
    inputWrapper.style.border = ''
    borderNumberPeople.style.border = ''
     // Remove the label if it exists
     if (label) {
        label.remove();
        label = null;
    }
}


// Catch the Bill value
billInput.addEventListener('change',function() {
    bill = billInput.value
    incrementTips() 
})

let selectedBtn = null;

btnTips.forEach((btn) => {
    btn.addEventListener('click', function () {
        if (selectedBtn) {
            btnCustom.value = ''
            selectedBtn.style.backgroundColor = ''; // reset background
        }
        selectedBtn = btn;
        btn.style.backgroundColor = '#26C2AE';
        tips = btn.textContent;
        incrementTips();
    });
});

// Catch the Custom Tip value
btnCustom.addEventListener('change',function() {
    btnTips.forEach((btn) =>{
        btn.style.backgroundColor = 'hsl(183, 100%, 15%)'
    })
    custom = btnCustom.value
    incrementTips() 
})

// Catch the number of people value
peopleInput.addEventListener('change',function() {
    numberPerson = peopleInput.value
    incrementTips() 
})


const calculateTip = (value) =>{
    let porcentageValue = (value / 100) * Number(bill)
    let tipAmountPerPerson = porcentageValue / Number(numberPerson)
    let totalPerPerson = (porcentageValue +  Number(bill)) / Number(numberPerson)
    tipAmount.innerHTML = `$${Math.trunc(tipAmountPerPerson)}`
    totalAmount.innerHTML = `$${Math.trunc(totalPerPerson)}`
}

const incrementTips = () =>{
    try {
        if (bill) {
            if(emptyFieldExecuted){filledField()}
                if (tips && numberPerson) {
                    let tip = Number(tips.replace('%', ''))
                    calculateTip(tip)
                    filledField()
            } else if (custom) { 
                if(custom && numberPerson){
                    calculateTip(custom)
                    filledField()
                }
            }
        } else {
            if(!emptyFieldExecuted){
                emptyField()
            }
         }  
    } catch (error) { // Include error object to log the error
        console.log('An error occurred:', error.message);
    }
}

btnReset()