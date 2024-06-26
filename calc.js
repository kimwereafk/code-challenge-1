const readline = require('readline');

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

function calculateNSSF(salaryScale) {
    let nssfContribution = 0;

    switch (salaryScale) {
        case 10000:
            nssfContribution = 600;
            break;
        case 18000:
            nssfContribution = 1080;
            break;
        case 20000:
            nssfContribution = 1200;
            break;
        case 30000:
            nssfContribution = 1800;
            break;
        case 36000:
            nssfContribution = 2160;
            break;
        case 50000:
            nssfContribution = 2160;
            break;
        case 100000:
            nssfContribution = 2160;
            break;
        default:
            // For other salary scales, use the contribution for 100000
            nssfContribution = 2160;
            break;
    }

    return nssfContribution;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const annualSalary = grossSalary * 12;

    const paye = calculatePAYE(annualSalary);
    const nhif = calculateNHIF(grossSalary);

    // For NSSF, we assume the salary scale is the same as basic salary
    const nssf = calculateNSSF(basicSalary);

    const totalDeductions = paye + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;

    return netSalary;
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter basic salary: ", (basicSalaryInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        if (isNaN(basicSalary) || basicSalary < 0) {
            console.log("Invalid input. Basic salary should be a non-negative number.");
            rl.close();
            return;
        }

        rl.question("Enter benefits: ", (benefitsInput) => {
            const benefits = parseFloat(benefitsInput);
            if (isNaN(benefits) || benefits < 0) {
                console.log("Invalid input. Benefits should be a non-negative number.");
                rl.close();
                return;
            }

            const netSalary = calculateNetSalary(basicSalary, benefits);
            console.log("Net Salary:", netSalary.toFixed(2));

            rl.close();
        });
    });
}

main();
