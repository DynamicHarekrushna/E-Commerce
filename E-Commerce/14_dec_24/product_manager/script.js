const productData = [
  {
    id: "001",
    image: "https://via.placeholder.com/50",
    name: "Sony Tablet 1",
    quantity: 10,
    price: "$299",
    manufacturer: "Sony",
    status: "Active",
  },
  {
    id: "002",
    image: "https://via.placeholder.com/50",
    name: "Apple iPad",
    quantity: 5,
    price: "$399",
    manufacturer: "Apple",
    status: "Active",
  },
  {
    id: "003",
    image: "https://via.placeholder.com/50",
    name: "Samsung Galaxy Tab",
    quantity: 8,
    price: "$349",
    manufacturer: "Samsung",
    status: "Inactive",
  },
  {
    id: "004",
    image: "https://via.placeholder.com/50",
    name: "Amazon Fire",
    quantity: 12,
    price: "$149",
    manufacturer: "Amazon",
    status: "Active",
  },
];

// Function to load table content
function loadTable(data) {
  const table = document.getElementById("product-table");
  table.innerHTML = ""; // Clear existing rows

  data.forEach((product) => {
    table.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td><img src="${product.image}" alt="${product.name}"></td>
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        <td>${product.manufacturer}</td>
        <td>${product.status}</td>
        <td class="action-buttons">
          <button class="view">View</button>
          <button class="delete" onclick="deleteProduct('${product.id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Function to handle product search
function searchProduct() {
  const searchTerm = document
    .getElementById("search")
    .value.trim()
    .toLowerCase();
  const filteredData = productData.filter((product) =>
    product.id.includes(searchTerm)
  );
  loadTable(filteredData);
}

// Function to delete a product
function deleteProduct(id) {
  const index = productData.findIndex((product) => product.id === id);
  if (index > -1) {
    productData.splice(index, 1);
    alert(`Product ID ${id} deleted successfully.`);
    loadTable(productData);
  }
}

// Function to add a new product
function addProduct(event) {
  event.preventDefault();

  // Get form values
  const id = document.getElementById("product-id").value.trim();
  const image = document.getElementById("product-image").value.trim();
  const name = document.getElementById("product-name").value.trim();
  const quantity = document.getElementById("product-quantity").value.trim();
  const price = document.getElementById("product-price").value.trim();
  const manufacturer = document
    .getElementById("product-manufacturer")
    .value.trim();
  const status = document.getElementById("product-status").value.trim();

  // Validate unique ID
  if (productData.some((product) => product.id === id)) {
    alert("Product ID already exists. Please use a unique ID.");
    return;
  }

  // Add new product
  productData.push({ id, image, name, quantity, price, manufacturer, status });
  alert("Product added successfully.");
  document.getElementById("add-product-form").reset();
  loadTable(productData);
}

// Event listener for form submission
document
  .getElementById("add-product-form")
  .addEventListener("submit", addProduct);

// Load table on page load
window.onload = () => loadTable(productData);
