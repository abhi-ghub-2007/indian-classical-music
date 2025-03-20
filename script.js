function showSignup() {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".signup-container").style.display = "block";
}

function showLogin() {
    document.querySelector(".signup-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
}

// Dummy authentication (for testing)
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    if (username === "user" && password === "pass") {  // Dummy check
        sessionStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to main website
    } else {
        alert("Invalid credentials. Try again.");
    }
});

// Signup functionality (basic)
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign-up successful! Now login.");
    showLogin();
});
function showSignup() {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".signup-container").style.display = "block";
}

function showLogin() {
    document.querySelector(".signup-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
}

// 🟢 Sign Up Functionality (Stores credentials in localStorage)
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("signupUser").value;
    let password = document.getElementById("signupPass").value;

    if (localStorage.getItem(username)) {
        alert("Username already exists! Try a different one.");
    } else {
        localStorage.setItem(username, password);
        alert("Sign-up successful! Now login.");
        showLogin();
    }
});

// 🔵 Login Functionality (Checks credentials from localStorage)
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    if (localStorage.getItem(username) === password) {
        sessionStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to main page
    } else {
        alert("Invalid credentials. Try again.");
    }
});