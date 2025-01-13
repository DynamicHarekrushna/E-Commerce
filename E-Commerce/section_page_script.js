// script.js

// Select the range inputs and value displays
const minPriceRange = document.getElementById("min-price");
const maxPriceRange = document.getElementById("max-price");
const minPriceValue = document.getElementById("min-price-value");
const maxPriceValue = document.getElementById("max-price-value");

// Update displayed values when sliders are moved
minPriceRange.addEventListener("input", () => {
  minPriceValue.textContent = minPriceRange.value;
  filterProducts();
});

maxPriceRange.addEventListener("input", () => {
  maxPriceValue.textContent = maxPriceRange.value;
  filterProducts();
});

// Example: Filter products based on price range (logic to be implemented)
function filterProducts() {
  const minPrice = parseInt(minPriceRange.value, 10);
  const maxPrice = parseInt(maxPriceRange.value, 10);

  console.log(
    `Filtering products with price between ₹${minPrice} and ₹${maxPrice}`
  );
  // Add dynamic filtering logic here (e.g., hide products outside the range)
}

// script.js

// Handle Customer Rating Filter
const ratingFilters = document.getElementsByName("customer-rating");

ratingFilters.forEach((filter) => {
  filter.addEventListener("change", () => {
    const selectedRating = filter.value;
    console.log(`Filtering products with ${selectedRating}★ and above`);
    filterProductsByRating(selectedRating);
  });
});

// Example: Function to filter products by rating
function filterProductsByRating(rating) {
  // Replace this logic with actual product filtering
  console.log(`Show products with customer rating >= ${rating}★`);
}
