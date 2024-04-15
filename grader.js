function calculateGrade(mark) {
    if (mark > 79) {
        return "A";
    } else if (mark >= 60 && mark <= 79) {
        return "B";
    } else if (mark >= 50 && mark <= 59) {
        return "C";
    } else if (mark >= 40 && mark <= 49) {
        return "D";
    } else {
        return "E";
    }
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter student's mark (between 0 and 100): ", (input) => {
        const mark = parseFloat(input);
        if (!isNaN(mark) && mark >= 0 && mark <= 100) {
            const grade = calculateGrade(mark);
            console.log(`The student's grade is: ${grade}`);
        } else {
            console.log("Mark should be between 0 and 100.");
        }
        rl.close();
    });
}

main();
