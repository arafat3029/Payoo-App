// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
        form.style.display = "none"
    }

    document.getElementById(id).style.display ="block"
}




const validPin = 1234


// add money
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value 

    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("add-pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    if(accountNumber.length <11){
        alert("Plese provid account number")
        return;
    }
    if(pin != validPin){
        alert("please provide valid pin number ")
        return;
    }

    const toatalNewAvailableBalance = amount + availableBalance

    document.getElementById("available-balance").innerText = toatalNewAvailableBalance
})


// Cashout Money
const withdrawPinNumber = 1234


document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()

    const amount = parseInt(document.getElementById("withdrae-amount").value)
    const accountNumberWithdraw = document.getElementById("cash-out-withdraw-btn").value 
    const withdrawPin = parseInt(document.getElementById("withdraw-pin").value)
    if(accountNumberWithdraw.length<11){
        alert("Invalid account Number");
        return;
    }
    if(withdrawPin !== withdrawPinNumber){
        alert("Invalid Pin Number")
        return;
    }
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const toatalNewAvailableBalance = availableBalance - amount
    document.getElementById("available-balance").innerText = toatalNewAvailableBalance
})





// toggling feature 

document.getElementById("add-button").addEventListener('click', function(e){
    handleToggle("add-money-parent")

    const formBtns = document.getElementsByClassName("form-btn")
    console.log(formBtns)
})
document.getElementById("cash-out-button").addEventListener('click', function(){
    handleToggle("Cash-oute-parent")
})
document.getElementById("transfer-button").addEventListener('click', function(){
    handleToggle("transfer-money-parent")
})
document.getElementById("bonus-button").addEventListener('click', function(){
    handleToggle("get-bonus-parent")
})