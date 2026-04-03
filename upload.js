const openUploadBtn = document.getElementById("openUploadBtn");
const uploadSection = document.getElementById("uploadSection");
const passportInput = document.getElementById("passportInput");
const dropArea = document.getElementById("dropArea");
const previewContainer = document.getElementById("previewContainer");
const fileName = document.getElementById("fileName");
const imagePreview = document.getElementById("imagePreview");
const doneBtn = document.getElementById("doneBtn");
const backBtn = document.getElementById("backBtn");

let selectedFile = null;
//show upload area
function showUploadSection(){
    uploadSection.classList.remove("hidden");
}

//show preview from either a file or a saved image string
function showPreview(fileOrData, savedName = "Previously uploaded passport photo"){
    showUploadSection();
    previewContainer.classList.remove("hidden");
    doneBtn.classList.remove("hidden");

    //if this is a saved image string from local storage
    if(typeof fileOrData === "string"){
        imagePreview.src = fileOrData;
        fileName.textContent = savedName;
        return;
    }

    //if this is a new file
    if(!fileOrData.type.startsWith("image/")){
        console.log("file selected is not in the right format");
        alert("Please upload an image file only");
        return;
    }

    fileName.textContent = fileOrData.name;
    selectedFile = fileOrData;

    const reader = new FileReader();

    reader.onload = function (e) {
        console.log("file finished loading");
        imagePreview.src = e.target.result;

        previewContainer.classList.remove("hidden");
        doneBtn.classList.remove("hidden");

        // Save preview temporarily in browser
        localStorage.setItem("passportPreview", e.target.result);
        localStorage.setItem("passportFileName", fileOrData.name);
    };

    reader.readAsDataURL(fileOrData);
}

// Open upload section when button is clicked
openUploadBtn.addEventListener("click", () => {
    console.log("upload passport button is clicked");
    showUploadSection();
    uploadSection.scrollIntoView({ behavior: "smooth" });
});

// When user selects a file by clicking
passportInput.addEventListener("change", (event) => {
    console.log("the user picked a file");
    const file = event.target.files[0];

    if (!file) {
        console.log("the user did not pick a file");
        return;
    }
    selectedFile = file;

    console.log("the file name is:", file.name);
    showPreview(file);
});

// Drag over effect
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
});

// Remove drag effect when leaving
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("dragover");
});

// Handle dropped file
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");

    const file = e.dataTransfer.files[0];
    if (!file) return;

    selectedFile = file;
    console.log("file dropped:", file.name);
    showPreview(file);
});

// Done button action
doneBtn.addEventListener("click", async () => {
  const user = auth.currentUser;

  if (!user) {
    alert("You must be logged in first.");
    return;
  }

  if (!selectedFile && !localStorage.getItem("passportPhotoURL")) {
    alert("Please upload a passport photo first.");
    return;
  }

  try {
    // Only upload if a new file was chosen
    if (selectedFile) {
      const storageRef = storage.ref(`passport_photos/${user.uid}/passport.jpg`);

      await storageRef.put(selectedFile);

      const downloadURL = await storageRef.getDownloadURL();

      await db.collection("users").doc(user.uid).set(
        {
          passportUploaded: true,
          passportPhotoURL: downloadURL,
          passportUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      );

      localStorage.setItem("passportUploaded", "true");
      localStorage.setItem("passportPhotoURL", downloadURL);
    }

    window.location.href = "pageone.html";
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Failed to save passport photo.");
  }
});

auth.onAuthStateChanged(async (user) => {
  if (!user) return;

  try {
    const doc = await db.collection("users").doc(user.uid).get();

    if (doc.exists) {
      const data = doc.data();

      if (data.passportPhotoURL) {
        uploadSection.classList.remove("hidden");
        previewContainer.classList.remove("hidden");
        doneBtn.classList.remove("hidden");

        imagePreview.src = data.passportPhotoURL;
        fileName.textContent = "Previously uploaded passport photo";

        openUploadBtn.textContent = "Change Passport Photo";
        openUploadBtn.style.backgroundColor = "green";

        localStorage.setItem("passportUploaded", "true");
        localStorage.setItem("passportPhotoURL", data.passportPhotoURL);
      }
    }
  } catch (error) {
    console.error("Error loading passport photo:", error);
  }
});

// Back button

if (backBtn) {
    backBtn.addEventListener("click", () => {
        console.log("back button clicked");
        window.location.href = "pageone.html";
    });
} else {
    console.log("backBtn not found");
}


// When page loads, restore existing uploaded preview
window.addEventListener("DOMContentLoaded", () => {
    const savedPreview = localStorage.getItem("passportPreview");
    const savedFileName = localStorage.getItem("passportFileName");
    const uploaded = localStorage.getItem("passportUploaded") === "true";

    console.log("saved preview exists:", !!savedPreview);
    console.log("passport uploaded:", uploaded);

    if (savedPreview) {
        showPreview(
            savedPreview,
            savedFileName || "Previously uploaded passport photo"
        );

        openUploadBtn.textContent = uploaded
            ? "Change Passport Photo"
            : "Upload Passport Photo";

        if (uploaded) {
            openUploadBtn.style.backgroundColor = "green";
        }
    }
});
//open upload section when button is clicked
/*openUploadBtn.addEventListener("click", () => {

    console.log("upload passport buttonisclicked")
    uploadSection.classList.remove("hidden");
    uploadSection.scrollIntoView({behavior: "smooth"});
});

//when user selects a file by clicking
passportInput.addEventListener("change", (event)=> {
    console.log("the user picked a file")
    const file = event.target.files[0];
    if(!file){ 
        console.log("wait the user did not open a file")
        return;}

        console.log("the file name is: ", file.name)
    showPreview(file);
});

//Function to show image preview
function showPreview(file) {
    if (!file.type.startsWith("image/")) {
        console.log("file seleced is not in the right format");
        alert ("Please upload an image file only.");
        return;
    }
    fileName.textContent = file.name;

    const reader = new FileReader();

    reader.onload = function (e) {
        console.log("file finished loading");
        console.log("file result base64: ", e.target.result);

        imagePreview.src = e.target.result;
        console.log("image preview src set");

        previewContainer.classList.remove("hidden");
        doneBtn.classList.remove("hidden");
        console.log("the preview and done button should be visible");

        localStorage.setItem("passportPreview", e.target.result);
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

    // redirect back to page one
    window.location.href = "pageone.html";
});



backBtn.addEventListener("click", function(){
    window.location.href = "pageone.html";
});*/