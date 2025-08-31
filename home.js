const validPin = 1234
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
// Withdraw Money
document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()
    console.log('Withdraw Money')
})





// toggling feature 

document.getElementById("add-button").addEventListener('click', function(){
    document.getElementById("Cash-oute-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-button").addEventListener('click', function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("Cash-oute-parent").style.display = "block"
})