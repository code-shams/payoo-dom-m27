document.getElementById('login-btn').addEventListener("click", function(event){
    event.preventDefault();
    const mobileNum = document.getElementById("mobile-number");
    const password = document.getElementById("password");
    // check if both of the input are of right length
    if (mobileNum.value.length === 11 && password.value.length === 4){
        // check if both input are not numbers
        if (isNaN(+mobileNum.value) || isNaN(+password.value)){
            alert("Invalid mobile number or password");
        }
        else{
            window.location.href = "./main.html";
        }
    }
    // hits when the inputs are not valid
    else{
        alert("Invalid mobile number or password");
    }
})