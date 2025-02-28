document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount-number").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("account-pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
    }
    else{
        console.log("Invalid PIN");
    }
  });
