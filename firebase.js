// Initialize Firebase (use CDN version in HTML)
const auth = firebase.auth();

function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "pageone.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}