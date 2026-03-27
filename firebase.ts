// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6eHy5xjaY-3W2ZDLEFLYxOsFCdAWLne4",
  authDomain: "my-login-site-95d97.firebaseapp.com",
  projectId: "my-login-site-95d97",
  storageBucket: "my-login-site-95d97.firebasestorage.app",
  messagingSenderId: "787242250818",
  appId: "1:787242250818:web:fa4f55a1feef9313d973db",
  measurementId: "G-QN3DYCHS4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


__________________________________
// the following line of code is to be added before cloisng </body>


<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyD6eHy5xjaY-3W2ZDLEFLYxOsFCdAWLne4",
    authDomain: "my-login-site-95d97.firebaseapp.com",
    projectId: "my-login-site-95d97",
    storageBucket: "my-login-site-95d97.firebasestorage.app",
    messagingSenderId: "787242250818",
    appId: "1:787242250818:web:fa4f55a1feef9313d973db"
  };

  firebase.initializeApp(firebaseConfig);
</script>


_______________________________________________
// still in index.html or separate JS file...add this line of code


<script>
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
</script>