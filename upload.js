const openUploadBtn = document.getElementById("openUploadBtn");
const uploadSection = document.getElementById("uploadSection");
const passportInput = document.getElementById("passportInput");
const dropArea = document.getElementById("dropArea");
const previewContainer = document.getElementById("previewContainer");
const fileName = document.getElementById("fileName");
const imagePreview = document.getElementById("imagePreview");
const doneBtn = document.getElementById("doneBtn");

//open upload section when button is clicked
openUploadBtn.addEventListener("click", () => {
    uploadSection.classList.remove("hidden");
    uploadSection.scrollIntoView({behavior: "smooth"});
});

//when user selects a file by clicking
passportInput.addEventListener("change", (event)=> {
    const file = event.target.files[0];
    if(!file) return;

    showPreview(file);
});

//Function to show image preview
function showPreview(file) {
    if (!file.type.startsWith("image/")) {
        alert ("Please upload an image file only.");
        return;
    }
    fileName.textContent = file.name;

    const reader = new FileReader();

    reader.onload = function (e) {
        imagePreview.src = e.target.result;
        previewContainer.classList.remove("hidden");
        doneBtn.classList.remove("hidden");
    };

    reader.readAsDataURL(file);
}

//drag over effect
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
});

// remove drag effect when leaving
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("dragover");
});

//handle dropped file
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");

    const file = e.dataTransfer.files[0];
    if (!file) return;

    showPreview(file);
});

//done button action 
doneBtn.addEventListener("click", () => {
    alert("Passport photo uploaded successfully.");

    openUploadBtn.textContent = "Completed";
    openUploadBtn.disabled = true;
    openUploadBtn.style.backgroundColor = "green";

    doneBtn.textContent = "Uploaded";
    doneBtn.disabled = true;

    //svae upload status in browser
    localStorage.setItem("passportUploaded", "true");
});