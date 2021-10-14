/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid():boolean{
    let isAllDataValid:boolean = true;
    
    // validate milesDriven, display error if invalid
    let milesBox:HTMLInputElement =
        <HTMLInputElement> document.getElementById("miles");
    let milesDriven:string = milesBox.value;
    if(milesDriven == "" || isNaN(parseFloat(milesDriven))){
        isAllDataValid = false;
    
    milesBox.nextElementSibling.innerHTML =
        "Miles Driven is required and must be a number";
    }
    return isAllDataValid;
}

/** 
 * This function should be called when the calculate button is clicked
*/

function main(){
    //check if data is valid
    if(isValid()){
        let miles:HTMLInputElement = 
            <HTMLInputElement>document.getElementById("miles");
        let milesData:number = parseFloat(miles.value);
        
        let gallons:HTMLInputElement = 
            <HTMLInputElement>document.getElementById("gallons");
        let gallonsData:number = parseFloat(gallons.value);
        
        //if data is valid, calculate MPG
        let mpg = calculateMPG(milesData, gallonsData);
        displayResults(mpg);

    }

}

/**
 * Displays given MPG on the form
 * @param milesPerGallon Number containing the miles per gallon
 */
function displayResults(milesPerGallon:number):void{

    //get <input> element containing mpg
    //must cast as <HTMLInputElement> otherwise getElementByID
    //will return HTMLElement which doesn't have a .value
    //get textbox from HTML
    let mpgBox:HTMLInputElement = 
        <HTMLInputElement>document.getElementById("mpg");
    //put the mpg into the value property
    mpgBox.value = milesPerGallon.toString();
}   

/**
 * Calculates miles per gallon
 * @param {number} milesDriven The number of miles driven
 * @param {number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven:number, gallonsUsed:number):number{
    //calculate MPG
    let mpg:number = milesDriven / gallonsUsed;
    //return the MPG as a number
    return mpg;
}

window.onload = function(){
    let calcBtn:HTMLElement = document.getElementById("calculate");
    calcBtn.onclick = main;

    let clearBtn:HTMLElement = document.getElementById("clear");
    clearBtn.onclick = resetForm;
}

function resetForm():void{
    // clear out all textboxes
    let allBoxes = document.querySelectorAll("input[type=text]");
        for(let i = 0; i < allBoxes.length; i++){
            let currBox = <HTMLInputElement>allBoxes[i];
            currBox.value = "";
        }
    //reset spans
    let errorSpans = document.querySelectorAll("span");
        for(let i = 0; i < errorSpans.length; i++){
        errorSpans[i].innerHTML = "*";
    }
}

