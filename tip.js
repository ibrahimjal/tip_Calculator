let tipPercent = 0.05
const tipContainer = document.getElementById("tipContainer")
let tipFive = document.getElementById("tipFive")
let tipTen = document.getElementById("tipTen")
let tipFifteen = document.getElementById("tipFifteen")
let tipTwentyFive = document.getElementById("tipTwentyFive")
let tipFifty = document.getElementById("tipFifty")
const totalTip = document.getElementById("totalTip")
let bill = document.getElementById("bill")
let peopleInput = document.getElementById("peopleInput")
let resetBtn = document.getElementById("resetBtn")



tipFive.addEventListener("click", function Five(){
    let bill = document.getElementById("bill").value
    bill = parseFloat(bill)
    let numOfPeople = document.getElementById("peopleInput").value
    numOfPeople = parseFloat(numOfPeople)
    let tip = (bill * tipPercent) / numOfPeople
    tipContainer.textContent = "$" + tip.toFixed(2)
    let total = (bill / numOfPeople) + tip 
    totalTip.textContent = "$" + total.toFixed(2)
    tipPercent = 0.05
      
})
tipTen.addEventListener("click", function Ten(){
    tipPercent = 0.1
    let bill = document.getElementById("bill").value
    bill = parseFloat(bill)
    let numOfPeople = document.getElementById("peopleInput").value
    numOfPeople = parseFloat(numOfPeople)
    let tip = (bill * tipPercent) / numOfPeople
    tipContainer.textContent = "$" + tip.toFixed(2)
    let total = (bill / numOfPeople) + tip 
    totalTip.textContent = "$" + total.toFixed(2)
    

})

tipFifteen.addEventListener("click", function Fifteen(){
    let tipPercent = 0.15
    let bill = document.getElementById("bill").value
    bill = parseFloat(bill)
    let numOfPeople = document.getElementById("peopleInput").value
    numOfPeople = parseFloat(numOfPeople)
    let tip = (bill * tipPercent) / numOfPeople
    tipContainer.textContent = "$" + tip.toFixed(2)
    let total = (bill / numOfPeople) + tip 
    totalTip.textContent = "$" + total.toFixed(2)
})
tipTwentyFive.addEventListener("click", function TwentyFive(){
    tipPercent = 0.25
    let bill = document.getElementById("bill").value
    bill = parseFloat(bill)
    let numOfPeople = document.getElementById("peopleInput").value
    numOfPeople = parseFloat(numOfPeople)
    let tip = (bill * tipPercent) / numOfPeople
    tipContainer.textContent = "$" + tip.toFixed(2)
    let total = (bill / numOfPeople) + tip 
    totalTip.textContent = "$" + total.toFixed(2)
})
tipFifty.addEventListener("click", function Fifty(){
    tipPercent = 0.5
    let bill = document.getElementById("bill").value
    bill = parseFloat(bill)
    let numOfPeople = document.getElementById("peopleInput").value
    numOfPeople = parseFloat(numOfPeople)
    let tip = (bill * tipPercent) / numOfPeople
    tipContainer.textContent = "$" + tip.toFixed(2)
    let total = (bill / numOfPeople) + tip 
    totalTip.textContent = "$" + total.toFixed(2) 
})

resetBtn.addEventListener("click", function reset(){
    document.getElementById("wrapper").style.background = "#000"
    bill.value = ""
    peopleInput.value = ""
    tipContainer.textContent = "$"
    totalTip.textContent = "$"

})





























