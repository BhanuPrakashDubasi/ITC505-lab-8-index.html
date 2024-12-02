function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // First Name validation
    if (firstName === "") {
        document.getElementById("firstNameError").innerText = "First name is required.";
        isValid = false;
    }

    // Last Name validation
    if (lastName === "") {
        document.getElementById("lastNameError").innerText = "Last name is required.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    }

    // Confirm Password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerText = "Confirm Password is required.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}
