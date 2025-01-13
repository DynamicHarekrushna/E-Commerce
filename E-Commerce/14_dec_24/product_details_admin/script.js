// DOM Elements
const discountInput = document.getElementById("discount");
const oldPriceElement = document.getElementById("old-price");
const newPriceElement = document.getElementById("new-price");

// Initial Price
const oldPrice = 195;

// Calculate Discounted Price
function applyDiscount() {
  const discount = parseFloat(discountInput.value) || 0;

  if (discount < 0 || discount > 100) {
    alert("Please enter a discount between 0 and 100.");
    discountInput.value = "";
    return;
  }

  const newPrice = oldPrice - (oldPrice * discount) / 100;
  newPriceElement.textContent = newPrice.toFixed(2);
}

// Event Listener
discountInput.addEventListener("input", applyDiscount);

// Save Button DOM Element
const saveButton = document.getElementById("save-button");

// Save Button Functionality
function saveProductDetails() {
  const discount = discountInput.value || 0;
  const newPrice = newPriceElement.textContent;

  alert(
    `Product details saved!\nDiscount: ${discount}%\nNew Price: $${newPrice}`
  );
}

// Event Listener for Save Button
saveButton.addEventListener("click", saveProductDetails);
