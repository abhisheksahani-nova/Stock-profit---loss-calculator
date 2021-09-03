var intialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var result = document.querySelector("#output-box");

submitButton.addEventListener("click", clickHandler );

function clickHandler() {
  result.style.display = "none";

  var initial = intialPrice.value;
  var quantity = stocksQuantity.value;
  var current = currentPrice.value;

  if (initial > 0 && quantity > 0 && current > 0) {

    if (initial > current) {
      var loss = (initial - current) * quantity ;
      var lossPercentage = (loss / initial) * 100 ;

      result.style.display = "block";
      result.innerText = `Hey, the loss is ${loss} and the percentage is ${lossPercentage}%` ;

    }else if (current > initial) {
      var profit = (current - initial) * quantity ;
      var profitPercentage = (profit / initial) * 100 ;

      result.style.display = "block";
      result.innerText = `Hey, the profit is ${profit} and the percentage is ${profitPercentage}%` ;
    }
  }else {
    result.style.display = "block";
    result.innerText = "Enter positive number" ;
  }
}
