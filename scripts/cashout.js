document.getElementById("withdraw-money-btn").
addEventListener("click", function(event){
    event.preventDefault();
    const agentNum = document.getElementById("agent-number");
    const amount = document.getElementById("amount");
    const pin = document.getElementById("pin");
    const balance = document.getElementById("balance");
    if (agentNum.value && amount.value && pin.value){
        if (!isNaN(+pin.value) && pin.value.length === 4){
            if (!isNaN(+agentNum.value) && agentNum.value.length === 11){
                const adjustedBalance = +balance.innerText - +amount.value;
                balance.innerText = adjustedBalance;
            }
            else{
                alert("Invalid Account Number");
            }
        }
        else{
            alert("invalid Pin");
        }
    }
    else{
        alert("Your provided information is wrong.")
    }
})