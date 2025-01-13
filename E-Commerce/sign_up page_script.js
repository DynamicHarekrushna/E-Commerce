document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !username || !email || !password) {
      document.getElementById("error-message").textContent =
        "All fields are required!";
      return;
    }

    document.getElementById("error-message").textContent = "";

    window.location.href = "/23_nov_24/login_page/index.html";
  });
