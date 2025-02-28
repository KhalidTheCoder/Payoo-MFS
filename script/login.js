document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const accountPin = document.getElementById("account-pin").value;
    if(accountNumber.length === 11){
        if(parseInt(accountPin) === 1234){
            window.location.href = "/main.html"
        }
        else{
            alert("Incorrect PIN")
        }  
    }
    else{
        alert("Need valid account number")
    }
  });
