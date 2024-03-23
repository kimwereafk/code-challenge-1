function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

// calculates the points by checking by how much the speed limit is exceeded
    calculate
    if (speed > speedLimit) {
        demeritPoints = (speed - speedLimit) / 5;
        // DemeritPoints is a whole number
        if ((demeritPoints | 0) === demeritPoints) {
        }
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", demeritPoints);
        }
    } else {
        console.log("Ok");
    }
}
