

function userLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "" || password == "") {
        alert('Please Complete All Required Fields..');
    } else {
        if (username == "admin" && password == "admin") {

            if (localStorage) {
                localStorage.setItem('uname', username);
                location.href = './adminPage.html';
            } else {
                alert('localStorage is diasabled for this browser.');
            }
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }

}