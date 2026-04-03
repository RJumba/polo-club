// Initialize Firebase (use CDN version in HTML)


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

const firebaseConfig = {
    apiKey: "AIzaSyD6eHy5xjaY-3W2ZDLEFLYxOsFCdAWLne4",
    authDomain: "my-login-site-95d97.firebaseapp.com",
    projectId: "my-login-site-95d97",
    storageBucket: "my-login-site-95d97.firebasestorage.app",
    messagingSenderId: "787242250818",
    appId: "1:787242250818:web:fa4f55a1feef9313d973db"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();