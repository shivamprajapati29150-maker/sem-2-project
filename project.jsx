let totalClasses = 0;
let presentClasses = 0;

// Current Date & Day
let today = new Date();

document.getElementById("currentDate").innerHTML =
"Today : " +
today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

// Show Date Range
function showDateRange() {

    let startDate =
    document.getElementById("startDate").value;

    let endDate =
    document.getElementById("endDate").value;

    if (startDate && endDate) {

        document.getElementById("dateRange").innerHTML =
        "Attendance Period : " +
        startDate + " To " + endDate;
    }
}

// Add Student
function addStudent() {

    let name =
    document.getElementById("studentName").value;

    let roll =
    document.getElementById("studentRoll").value;

    if (name === "" || roll === "") {

        alert("Please enter Name and Roll Number");
        return;
    }

    let row =
    document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>
            <button class="present"
            onclick="markAttendance('present')">
            Present
            </button>

            <button class="absent"
            onclick="markAttendance('absent')">
            Absent
            </button>
        </td>
    `;

    document.getElementById("studentTable")
    .appendChild(row);

    document.getElementById("studentName").value = "";
    document.getElementById("studentRoll").value = "";
}

// Mark Attendance
function markAttendance(status) {

    totalClasses++;

    if (status === "present") {
        presentClasses++;
    }

    updateAttendance();
}

// Update Percentage
function updateAttendance() {

    let percentage = 0;

    if (totalClasses > 0) {

        percentage =
        (presentClasses / totalClasses) * 100;
    }

    document.getElementById("percentage")
    .innerHTML =
    percentage.toFixed(2) + "%";
}

// Predict if Present
function predictPresent() {

    let days =
    parseInt(document.getElementById("futureDays").value);

    if (isNaN(days) || days <= 0) {

        alert("Enter valid number");
        return;
    }

    let futurePresent =
    presentClasses + days;

    let futureTotal =
    totalClasses + days;

    let futurePercentage =
    (futurePresent / futureTotal) * 100;

    document.getElementById("predictionResult")
    .innerHTML =
    "If All Present : " +
    futurePercentage.toFixed(2) + "%";
}

// Predict if Absent
function predictAbsent() {

    let days =
    parseInt(document.getElementById("futureDays").value);

    if (isNaN(days) || days <= 0) {

        alert("Enter valid number");
        return;
    }

    let futureTotal =
    totalClasses + days;

    let futurePercentage =
    (presentClasses / futureTotal) * 100;

    document.getElementById("predictionResult")
    .innerHTML =
    "If All Absent : " +
    futurePercentage.toFixed(2) + "%";
}