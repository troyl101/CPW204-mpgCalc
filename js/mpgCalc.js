function isValid() {
    var isAllDataValid = true;
    var milesBox = document.getElementById("miles");
    var milesDriven = milesBox.value;
    if (milesDriven == "" || isNaN(parseFloat(milesDriven))) {
        isAllDataValid = false;
        milesBox.nextElementSibling.innerHTML =
            "Miles Driven is required and must be a number";
    }
    return isAllDataValid;
}
function main() {
    if (isValid()) {
        var miles = document.getElementById("miles");
        var milesData = parseFloat(miles.value);
        var gallons = document.getElementById("gallons");
        var gallonsData = parseFloat(gallons.value);
        var mpg = calculateMPG(milesData, gallonsData);
        displayResults(mpg);
    }
}
function displayResults(milesPerGallon) {
    var mpgBox = document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}
function calculateMPG(milesDriven, gallonsUsed) {
    var mpg = milesDriven / gallonsUsed;
    return mpg;
}
window.onload = function () {
    var calcBtn = document.getElementById("calculate");
    calcBtn.onclick = main;
    var clearBtn = document.getElementById("clear");
    clearBtn.onclick = resetForm;
};
function resetForm() {
    var allBoxes = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < allBoxes.length; i++) {
        var currBox = allBoxes[i];
        currBox.value = "";
    }
    var errorSpans = document.querySelectorAll("span");
    for (var i = 0; i < errorSpans.length; i++) {
        errorSpans[i].innerHTML = "*";
    }
}
