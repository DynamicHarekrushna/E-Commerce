document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".btn.search");
  const viewAllButton = document.querySelector(".btn.view-all");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Search functionality will be implemented!");
  });

  viewAllButton.addEventListener("click", () => {
    alert("Displaying all orders!");
  });
});
