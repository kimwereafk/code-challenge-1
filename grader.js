function calculateGrade(marks) {
    if(marks > 79 && marks <= 100){
        console.log("student has an A")
    }
    else if(marks >= 60 && marks <= 79){
        console.log("student has a B")
    }
    else if(marks >= 49 && marks <= 59){
        console.log("student has a C")
    }
    else if(marks >= 40 && marks < 49){
        console.log("student has a D")
    } 
    else { 
        console.log("student has an E")
    } 
}
function main() {
    let userInput = prompt("Enter the student's marks: ");
    let marks = Number(userInput);    
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        calculateGrade(marks);
    } else {
        console.log("Invalid input. Please enter a valid mark between 0 and 100.");
    }
}

main();