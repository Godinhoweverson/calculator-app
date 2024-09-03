const billInput = document.getElementById('billInput')
const peopleInput = document.getElementById('peopleInput')
const btnTips = [...document.querySelectorAll('.tip')]
const btnCuston = document.getElementById('custon')

let tipsOn = false
let tips
let custon
let numberPerson
let bill

btnTips.forEach((btn) =>{
    btn.addEventListener('click', function () {
    tips = btn.textContent
    tipsOn = true
    incrementTips() 
   } )
})
 
btnCuston.addEventListener('change',function() {
    custon = btnCuston.value
    incrementTips() 
})

peopleInput.addEventListener('change',function() {
    numberPerson = peopleInput.value
    incrementTips() 
})

billInput.addEventListener('change',function() {
    bill = billInput.value
    incrementTips() 
})
const incrementTips = () =>{
    if(tipsOn){
        console.log(bill)
    }else{
       console.log(custon) 
    }
}