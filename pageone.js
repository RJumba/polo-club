const checkStatusBtn = document.getElementById("checkStatusBtn");
const completeTaskBtn = document.getElementById("completeTaskBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const totalTasks = 3;

function getCompletedTasks() {
    let completedTasks = 0;

    const passportUploaded = localStorage.getItem("passportUploaded") === "true";
    if (passportUploaded){
        completedTasks ++;
    }
    return completedTasks;
}

function updateProgress() {
    const completedTasks = getCompletedTasks();
    const percent = Math.round((completedTasks / totalTasks) * 100);

    progressFill.style.width = percent + "%";
    progressText.textContent = `${percent}% Complete`;
}

function updateTasksButtons() {
    const passportUploaded = localStorage.getItem("passportUploaded") === "true";

    if (passportUploaded) {
        uploadTaskBtn.textContent = "Edit Passport Photo";
        uploadTaskBtn.style.backgroundColor = "green";
    } else {
        uploadTaskBtn.textContent = "Upload Passport Photo";
        uploadTaskBtn.style.backgroundColor = "";
    }
}

function updateStatus() {
    const reviewStatus = document.getElementById("reviewStatus");
    const cardNumber = document.getElementById("cardNumber");
    const completedTasks = getCompletedTasks();

    if (completedTasks === totalTasks) {
        reviewStatus.textContent = "Approved";
        cardNumber.textContent = "TPC2026";
    } else {
        reviewStatus.textContent = "Pending";
        cardNumber.textContent = "Not Assigned";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    updateTasksButtons();
    updateProgress();
    updateStatus();
});

uploadTaskBtn.addEventListener("click", () => {
    window.location.href = "Upload.html";
});

checkStatusBtn.addEventListener("click", function() {
    updateStatus();
});

logoutBtn.addEventListener("click", async function() {
    console.log("logout button clicked");

    const confirmLogout = confirm("Are you sure you want to logout?");
    console.log("user chose:", confirmLogout);

    if(confirmLogout){
    console.log("user confirmed logout");

    await firebase.auth().signOut();
    console.log("firebase signout finished");

    window.location.href = "login.html";
    console.log("user redirected to login page");
    }
});




/*checkStatusBtn.addEventListener("click", function() {

    const reviewStatus = document.getElementById("reviewStatus");
    const cardNumber = document.getElementById("cardNumber");

    if (completedTasks === taskList.length) {
        reviewStatus.textContent = "Approved";
        cardNumber.textContent = "TPC2026";
    }
    else{
        reviewStatus.textContent = "Pending";
        cardNumber.textContent = "Not Assigned";
    }
});

function updateProgress() {
    const percent = Math.round((completedTasks / taskList.length) * 100);
    progressFill.style.width = percent + "%";
    progressText.textContent = percent + "% Complete";
}

completeTaskBtn.addEventListener("click", function() {
    for (let i = 0; i < taskList.length; i++) {
        if (!taskList[i].classList.contains("done")){
            taskList[i].classList.add("done");
            completedTasks++;
            updateProgress();
            break;
        }
    }
});



const uploadTaskBtn = document.getElementById("uploadTaskBtn");

uploadTaskBtn.addEventListener("click", () => {
    window.location.href = "upload.html";
});

window.addEventListener("DOMContentLoaded", () => {
    const uploaded = localStorage.getItem("passportUploaded");

    console.log("Saved value is: ", uploaded);
    if (uploaded === "true"){
        
        uploadTaskBtn.style.backgroundColor = "green";

    }
});


if (completeTaskBtn) {
    completeTaskBtn.addEventListener("click", function () {
        alert("This button still uses the old task system. We can connect it to a real task next.");
    });
}*/
