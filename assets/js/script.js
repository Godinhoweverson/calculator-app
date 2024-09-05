const billInput = document.getElementById('billInput')
const peopleInput = document.getElementById('peopleInput')
const btnTips = [...document.querySelectorAll('.tip')]
const btnCustom = document.getElementById('custom')
const inputWrapper = document.querySelector('.input-wrapper')
const inputValue = document.querySelector('.input-value')
const borderNumberPeople = document.querySelector('.borderNumberPeople')
const peopleLabelBox = document.querySelector('.people-label-box')

let tipsOn
let tips
let custom
let numberPerson
let bill


const emptyField = () => {
      //Change border of input 
      inputWrapper.style.border = '2px solid #E17457'
      borderNumberPeople.style.border = '2px solid #E17457'

      //Create a new label for both inputs
      let label = document.createElement('label')
      label.innerHTML = "Can't be zero"
      label.style.color = '#E17457'

      peopleLabelBox.appendChild(label)
      peopleLabelBox.style.display = 'flex'
      peopleLabelBox.style.justifyContent = 'space-between';
      peopleLabelBox.style.width = '100'

      bill = ''
      tips = ''
      custom = ''
}

// Catch the Bill value
billInput.addEventListener('change',function() {
    bill = billInput.value
    incrementTips() 
})

// Catch the Select Tip value
btnTips.forEach((btn) =>{
    btn.addEventListener('click', function () {
    btn.style.backgroundColor = '#26C2AE'
    tips = btn.textContent
    incrementTips() 
   } )
})
 
// Catch the Custom Tip value
btnCustom.addEventListener('change',function() {
    custom = btnCustom.value
    incrementTips() 
})

// Catch the number of people value
peopleInput.addEventListener('change',function() {
    numberPerson = peopleInput.value
    incrementTips() 
})

const incrementTips = () =>{
    try {
        if (bill) {
            if (tips && numberPerson) {
                let tip = Number(tips.replace('%', ''))
                let porcentageValue = (tip / 100) * Number(bill)
                let tipAmount = porcentageValue / Number(numberPerson)
                console.log(tipAmount);
                
            } else if (custom) { 
                console.log(bill);
                console.log(custom);
            }
        } else {
          emptyField()
         }  
    } catch (error) { // Include error object to log the error
        console.log('An error occurred:', error.message);
    }
    // if(tips){
    //     if(bill)
    //     console.log(bill)
    //     console.log(tips)
    // }else if(custom){
    //     console.log(bill)
    //    console.log(custom) 
    // }
}