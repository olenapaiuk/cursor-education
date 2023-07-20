const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//TASK#1
function getMyTaxes (salary) {
    tax = Math.ceil(Number(salary)*this.tax);
    return tax;
}
const result1 = getMyTaxes.call(ukraine, 3000);
console.log(`1. Tax in your country is ${result1}`);

//TASK#2
function getMiddleTaxes () {
    let middleTax = Math.ceil(this.middleSalary*this.tax);
    return middleTax;
}
const result2 = getMiddleTaxes.call(ukraine);
console.log(`2. Middle tax in your country is ${result2}`);

//TASK#3
function getTotalTaxes () {
    let totalTaxes = Math.ceil(this.tax * this.middleSalary * this.vacancies);
    return totalTaxes;
}
const result3 = getTotalTaxes.call(ukraine);
console.log(`3. Total taxes in your country are ${result3}`);

//TASK#4
function getMySalary () {
        const salary = Math.ceil(Math.random()*(2000-1500)+1500);
const taxes = getMyTaxes.call(ukraine, salary);
const profit= Math.ceil(salary - taxes);
return {salary, taxes, profit}
}

setInterval (() =>  
    console.log('4. My salary is:', getMySalary(ukraine)), 10000);