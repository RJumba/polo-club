const form = document.querySelector(".formgroup");

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

function showError (input, message) {
    const errorEl = input.parentElement.querySelector(".errormessage");
    input.classList.add("input-error");
    errorEl.textContent = message;
}

function clearError(input) {
    const errorEl = input.parentElement.querySelector(".errormessage");
    input.classList.remove("input-error");
    errorEl.textContent = "";
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    [emailEl, passwordEl].forEach(clearError);

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    let hasError = false;

    if (!email){
        showError(emailEl, "Email is required");
        hasError = true;
    }

    if (!password){
        showError(passwordEl, "Password is required");
        hasError = true;
    }

    if(hasError) return;


    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = "pageone.html";
    } catch (error) {
        if (
            error.code === "auth/wrong-password" ||
            error.code === "wrong-password"
        ) {

            showError(passwordEl, "Incorrect password.");

        } else if ( error.code === "auth/user-not-found" || error.code === "user-not-found"){

            showError(emailEl, "No account found with that email");

        } else if (error.code === "auth/invalid-email" ||
      error.code === "invalid-email"){

            showError(emailEl, "invalid email address");
            
        }
        else {
            showError(emailEl,"Login failed. Please try again.")
        }
    }
});