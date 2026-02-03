// Akan names arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (day < 1 || day > 31) {
        alert("Please enter a valid day (1–31).");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month (1–12).");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Extract CC and YY
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    // Day of week calculation
    const dayOfWeek =
        (((4 * CC - 2 * CC - 1) +
            (5 * YY / 4) +
            (26 * (month + 1) / 10) +
            day) % 7);

    const index = Math.floor(dayOfWeek);

    let akanName;
    if (gender.value === "male") {
        akanName = maleNames[index];
    } else {
        akanName = femaleNames[index];
    }

    document.getElementById("result").innerHTML =
        `You were born on <strong>${daysOfWeek[index]}</strong>.<br>
         Your Akan name is <strong>${akanName}</strong>.`;
});
