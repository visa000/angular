class LifeInsurance {
    constructor(id, policyHolderName, policyAmount) {
        this.id = id;
        this.policyAmount = policyAmount;
        this._policyHolderName = policyHolderName;   
    }

    set policyHolderName(policyHolderName) {
        this._policyHolderName = policyHolderName;
    }
    get policyHolderName() {
        return this._policyHolderName.toUpperCase();
    }
    toString() {
        return `${this.id}, ${this.policyHolderName}, ${this.policyAmount}`;
    }
}

const ramesh = new LifeInsurance(101, 'Vishnu', 456660);

console.log(ramesh.toString());
console.log(ramesh.policyHolderName);

module.exports = LifeInsurance;