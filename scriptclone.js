const completeTaskBtn = document.getElementById("completeTaskBtn");
const checkStatusBtn = document.getElementById("checkStatusBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const taskList = document.querySelectorAll("taskList li");

let completedTasks = 0;

checkStatusBtn.addEventListener("click", function() {

    const registrationStatus = document.getElementById("registrationStatus");
    const cardNumber = document.getElementById("cardNumber");

    if (completedTasks === taskList.length) {
        reviewStatus.textContent = "Approved";
        cardNumber.textContent = "123456";
    }
    else{
        reviewStatus.textContent = "Pending";
        cardNumber.textContent = "Not Assigned";
    }
});


 