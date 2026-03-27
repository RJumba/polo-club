const form = document.querySelector(".fill_form");

const nameEl = document.getElementById("name");
const phoneEl = document.getElementById("phone_number");
const idEl = document.getElementById("idnumber");
const emgEl = document.getElementById("emg");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

function kenyanphone(raw) {
    const digits = raw.replace(/\D/g, "");

    if (digits.startsWith("254") && digits.length === 12) {
        return `+${digits}`;
    }

    if ((digits.startsWith("07") || digits.startsWith("01")) && digits.length === 10) {
        return `+254${digits.slice(1)}`;
    }

    return null;
}

function showError(input, message) {
    input.setCustomValidity(message);
    input.reportValidity();
}

function clearError(input) {
    if (input){
        input.setCustomValidity("");
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    [nameEl, phoneEl, idEl, emgEl, emailEl, passwordEl].forEach(clearError);

    const name = nameEl.value.trim();
    if (name.length < 2) {
        return showError(nameEl, "Please enter full name.");
    }

    const idDigits = idEl.value.replace(/\D/g, "");
    if (idDigits.length < 6 || idDigits.length > 10) {
        return showError(idEl, "Enter a valid ID number (digits only).");
    }

    const formattedPhone = kenyanphone(phoneEl.value);
    if (!formattedPhone) {
        return showError(phoneEl, "Enter a valid Kenyan phone number (e.g. 0712345678 or +254712345678).");
    }
    phoneEl.value = formattedPhone;

    console.log("raw emg input:", emgEl.value);
    const formattedEmg = kenyanphone(emgEl.value);
    if (!formattedEmg) {
        return showError(emgEl, "Enter a valid emergency number (e.g. 0712345678 or +254712345678).");
    }
    console.log("value after running:", formattedEmg);
    emgEl.value = formattedEmg;

    const email = emailEl.value.trim();
    const password = passwordEl.value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

        const payload = {
            uid: userCredential.user.uid,
            name,
            phone_number: formattedPhone,
            idnumber: idDigits,
            emergency_number: formattedEmg,
            email,
            created_at: new Date().toISOString(),
        };

        localStorage.setItem("polo_registration", JSON.stringify(payload));

        alert("Registration saved successfully!");
        form.reset();

        window.location.href = "pageone.html";
    } catch (error) {
        alert(error.message);
    }
});