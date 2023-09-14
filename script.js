document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Function to check login credentials
    function checkLogin(username, password, callback) {
        if (username === 'admin' && password === '12345') {
            callback(true);
        } else {
            callback(false);
        }
    }
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