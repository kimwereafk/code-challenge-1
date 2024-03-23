function calculateGrade(marks) {
    // check if amrks are between 80 and 100
    if(marks > 79 && marks <= 100){
        console.log("student has an A")
    }
    // check if marks are between 60 and 79
    else if(marks >= 60 && marks <= 79){
        console.log("student has a B")
    }
    // check if marks are between 50 and 59
    else if(marks >= 49 && marks <= 59){
        console.log("student has a C")
    }
    // check if marks are between 40 and 49
    else if(marks >= 40 && marks < 49){
        console.log("student has a D")
    }
    // if marks are less tahn 40
    else { 
        console.log("student has an E")
    } 
}
function main() {
    // prompt the user to entre the student marks
    let userInput = prompt("Enter the student's marks: ");
    let marks = Number(userInput);
    // ensure number is between 0 and 100 
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        calculateGrade(marks);
    } else {
        console.log("Invalid input. Please enter a valid mark between 0 and 100.");
    }
}

main();
