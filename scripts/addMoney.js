document.getElementById("add-money-btn").
addEventListener("click", function(event){
    event.preventDefault();
    const selectBank = document.getElementById('select-bank');
    const accountNum = document.getElementById("account-number");
    const amount = document.getElementById("add-money");
    const pin = document.getElementById("password")
    const balance = document.getElementById("balance");
    if (accountNum.value && amount.value && pin.value){
        if (!isNaN(+pin.value) && pin.value.length === 4){
            if (!isNaN(+accountNum.value) && accountNum.value.length === 11){
                const sum = +balance.innerText + +amount.value;
                balance.innerText = sum;
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