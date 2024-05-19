//Changes the price when the switch button is clicked.
$(".slider").click(function() {
  $(".price").toggle();
});

//arrow left = 37
//arrow right = 39

document.addEventListener("keydown", function(event){
  changePrice(event.key)
});

function changePrice(key){
  switch(key){
    case 'a':
    $(".price").toggle();
    break;

    case 's':
    $(".price").toggle();
    break;
  }
}

//toggle between usd and Inr
const exchangeRate=83;

function convertToINR(usd) {
    return usd * exchangeRate;
}

// Function to update prices based on the toggle state

function updatePrices() {
  const isINR = document.getElementById('currency-toggle').checked;
  const priceListItems = document.querySelectorAll('.price-item');

  priceListItems.forEach(item => {
      const usdValue = parseFloat(item.getAttribute('data-usd'));
      if (isINR) {
          item.textContent = `₹${convertToINR(usdValue)}`;
      } else {
          item.textContent = `$${usdValue}`;
      }
  });
}

// Add event listener to the toggle switch
document.getElementById('currency-toggle').addEventListener('change', updatePrices);

// Call updatePrices on page load to set initial prices
updatePrices();
