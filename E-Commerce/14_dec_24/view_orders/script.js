const table = document.querySelector("#orderTable tbody");
const form = document.querySelector("#productForm");
let editMode = null; // Holds the row being edited

// Add / Edit Form Submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const order = document.getElementById("order").value;
  const date = document.getElementById("date").value;
  const store = document.getElementById("store").value;
  const company = document.getElementById("company").value;
  const ordered = document.getElementById("ordered").value;
  const status = document.getElementById("status").value;
  const total = document.getElementById("total").value;

  if (editMode) {
    // Update row if in edit mode
    editMode.innerHTML = `
      <td></td>
      <td>${order}</td>
      <td>${date}</td>
      <td>${store}</td>
      <td>${company}</td>
      <td>${ordered}</td>
      <td>${status}</td>
      <td>${total}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    addRowEvents(editMode); // Reattach events
    editMode = null;
  } else {
    // Add new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td></td>
      <td>${order}</td>
      <td>${date}</td>
      <td>${store}</td>
      <td>${company}</td>
      <td>${ordered}</td>
      <td>${status}</td>
      <td>${total}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        <button class="view" onclick="viewProduct()">view</button>

      </td>
    `;
    table.appendChild(newRow);
    addRowEvents(newRow);
  }
  form.reset();
  updateRowNumbers();
});

// Delete and Edit Events
function addRowEvents(row) {
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
    updateRowNumbers();
  });

  row.querySelector(".edit-btn").addEventListener("click", () => {
    editMode = row;
    const cells = row.children;
    document.getElementById("order").value = cells[1].innerText;
    document.getElementById("date").value = cells[2].innerText;
    document.getElementById("store").value = cells[3].innerText;
    document.getElementById("company").value = cells[4].innerText;
    document.getElementById("ordered").value = cells[5].innerText;
    document.getElementById("status").value = cells[6].innerText;
    document.getElementById("total").value = cells[7].innerText;
  });
}

// Update row numbers dynamically
function updateRowNumbers() {
  document.querySelectorAll("#orderTable tbody tr").forEach((row, index) => {
    row.children[0].innerText = index + 1;
  });
}

// Attach events to existing rows
document.querySelectorAll("#orderTable tbody tr").forEach(addRowEvents);

function viewProduct() {
  window.location.href = "product-details.html";
}
