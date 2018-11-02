var LifeInsurance = require('./insurance');

class Application {
    static main() {

        const ramesh = new LifeInsurance(101, 'Vishnu', 456660);
        const rajesh = new LifeInsurance(102, 'Rajesh', 5000)

        const policyList = [ramesh, rajesh];

        for (let i=0; i< policyList.length; i++) {
            console.log(policyList[i].toString());
            console.log(policyList[i].policyHolderName);

        }

    }
}

//console.log(i);
Application.main();