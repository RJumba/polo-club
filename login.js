const form = document.querySelector(".formgroup");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = "pageone.html";
    } catch (error) {
        alert(error.message);
    }
});