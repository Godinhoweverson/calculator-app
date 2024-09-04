const billInput = document.getElementById('billInput')
const peopleInput = document.getElementById('peopleInput')
const btnTips = [...document.querySelectorAll('.tip')]
const btnCustom = document.getElementById('custom')
const inputWrapper = document.querySelector('.input-wrapper')
const borderNumberPeople = document.querySelector('.borderNumberPeople')
const peopleLabelBox = document.querySelector('.people-label-box')
const billLabelBox = document.querySelector('.bill-label-box')

let tipsOn
let tips
let custom
let numberPerson
let bill

billInput.addEventListener('change',function() {
    bill = billInput.value
    incrementTips() 
})


btnTips.forEach((btn) =>{
    btn.addEventListener('click', function () {
    tips = btn.textContent
    incrementTips() 
   } )
})
 
btnCustom.addEventListener('change',function() {
    custom = btnCustom.value
    incrementTips() 
})

peopleInput.addEventListener('change',function() {
    numberPerson = peopleInput.value
    incrementTips() 
})

const incrementTips = () =>{
    try {
        if (bill) {
            if (tips) {
                console.log(bill);
                console.log(tips);
            } else if (custom) { 
                console.log(bill);
                console.log(custom);
            }
        } else {
            inputWrapper.style.border = '2px solid #E17457'
            borderNumberPeople.style.border = '2px solid #E17457'
            let label = document.createElement('label')
            label.innerHTML = "Can't be zero"
            label.style.color = '#E17457'
            peopleLabelBox.appendChild(label)
            peopleLabelBox.style.display = 'flex'
            peopleLabelBox.style.justifyContent = 'space-between';
            peopleLabelBox.style.width = '100'
            console.log('The bill is empty');
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