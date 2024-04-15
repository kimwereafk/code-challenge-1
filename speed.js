const readline = require('readline');

function calculateDemeritPoints(speed) {
    const speedLimit = 70;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", demeritPoints);
        }
    }
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the speed of the car (in km/h): ", (speedInput) => {
        const speed = parseFloat(speedInput);
        if (!isNaN(speed) && speed >= 0) {
            calculateDemeritPoints(speed);
        } else {
            console.log("Invalid input. Speed should be a non-negative number.");
        }
        rl.close();
    });
}

main();