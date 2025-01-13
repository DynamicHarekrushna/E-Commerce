document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (!fullName || !email || !phone || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
});
