var LifeInsurance = require('./insurance');

const ramesh = new LifeInsurance(101, 'Vishnu', 456660);
const rajesh = new LifeInsurance(102, 'Rajesh', 5000)

let policyList = [ramesh, rajesh];

policyList.forEach(policy => console.log(policy.toString()));

let nameList = policyList.map(policy => policy.policyHolderName);

let amountList = policyList.map(policy => policy.policyAmount);
console.log(nameList);
console.log(amountList);

function showPremium(policyAmount = 2000) {
    return policyAmount * .10 ;
}

function printPremium(...policyList) {
    policyList.forEach(policy => {
        console.log(showPremium(policy.policyAmount));
    });
}

console.log(showPremium(amountList[0]));
console.log(showPremium(amountList[1]));
console.log(showPremium());

printPremium(ramesh);
printPremium(ramesh, rajesh);