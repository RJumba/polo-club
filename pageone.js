const checkStatusBtn = document.getElementById("checkStatusBtn");
const completeTaskBtn = document.getElementById("completeTaskBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const taskList = document.querySelectorAll("#taskList li");


const finishedTasks = document.querySelectorAll("#taskList li.done").length;

let completedTasks = finishedTasks


checkStatusBtn.addEventListener("click", function() {

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

const uploadTaskBtn = document.getElementById("uploadTaskBtn");

uploadTaskBtn.addEventListener("click", () => {
    window.location.href = "upload.html";
});

