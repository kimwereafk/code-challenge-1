function calculatePAYE(annualSalary) {
    let taxAmount = 0;

    if (annualSalary <= 288000) {
        taxAmount = annualSalary * 0.1;
    } else if (annualSalary <= 388000) {
        taxAmount = 24000 * 0.1 + (annualSalary - 24000) * 0.25;
    } else if (annualSalary <= 6000000) {
        taxAmount = 24000 * 0.1 + (32333 - 24000) * 0.25 + (annualSalary - 32334) * 0.3;
    } else if (annualSalary <= 9600000) {
        taxAmount = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32334) * 0.3 + (annualSalary - 500001) * 0.325;
    } else {
        taxAmount = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32334) * 0.3 + (800000 - 500001) * 0.325 + (annualSalary - 800000) * 0.35;
    }

    return taxAmount / 12; // Return monthly PAYE
}

function calculateNHIF(grossPay) {
    let nhifDeduction = 0;

    if (grossPay <= 5999) {
        nhifDeduction = 150;
    } else if (grossPay <= 7999) {
        nhifDeduction = 300;
    } else if (grossPay <= 11999) {
        nhifDeduction = 400;
    } else if (grossPay <= 14999) {
        nhifDeduction = 500;
    } else if (grossPay <= 19999) {
        nhifDeduction = 600;
    } else if (grossPay <= 24999) {
        nhifDeduction = 750;
    } else if (grossPay <= 29999) {
        nhifDeduction = 850;
    } else if (grossPay <= 34999) {
        nhifDeduction = 900;
    } else if (grossPay <= 39999) {
        nhifDeduction = 950;
    } else if (grossPay <= 44999) {
        nhifDeduction = 1000;
    } else if (grossPay <= 49999) {
        nhifDeduction = 1100;
    } else if (grossPay <= 59999) {
        nhifDeduction = 1200;
    } else if (grossPay <= 69999) {
        nhifDeduction = 1300;
    } else if (grossPay <= 79999) {
        nhifDeduction = 1400;
    } else if (grossPay <= 89999) {
        nhifDeduction = 1500;
    } else if (grossPay <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    return nhifDeduction;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const annualSalary = grossSalary * 12;

    const paye = calculatePAYE(annualSalary);
    const nhif = calculateNHIF(grossSalary);

    const totalDeductions = paye + nhif;
    const netSalary = grossSalary - totalDeductions;

    return netSalary;
}

function main() {
    let basicSalaryInput = prompt("Enter basic salary: ");
    let benefitsInput = prompt("Enter benefits: ");

    let basicSalary = parseFloat(basicSalaryInput);
    let benefits = parseFloat(benefitsInput);

    if (!isNaN(basicSalary) && !isNaN(benefits) && basicSalary >= 0 && benefits >= 0) {
        let netSalary = calculateNetSalary(basicSalary, benefits);
        console.log("Net Salary:", netSalary.toFixed(2));
    } else {
        console.log("Invalid input. Please enter valid numbers for basic salary and benefits.");
    }
}

main();
