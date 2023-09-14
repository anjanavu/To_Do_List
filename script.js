document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Function to check login credentials
    function checkLogin(username, password, callback) {
        if (username === 'admin' && password === '12345') {
            // If credentials are valid, call the callback with true
            callback(true);
        } else {
            // If credentials are invalid, call the callback with false
            callback(false);
        }
    }

    // Callback function for handling login result
    function handleLoginResult(isValid) {
        if (isValid) {
            redirectToMainPage();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }

    // Redirect to the main page
    function redirectToMainPage() {
        window.location.href = 'main.html';
    }

    // Check login credentials and pass the callback function
    checkLogin(username, password, handleLoginResult);
});