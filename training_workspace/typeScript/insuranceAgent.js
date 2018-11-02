"use strict";
class InsuranceAgent {
    constructor(agentCode, agentName) {
        this._agentCode = agentCode;
        this._agentName = agentName;
    }
    set agentCode(agentCode) {
        this._agentCode = agentCode;
    }
    set agentName(agentName) {
        this._agentName = agentName;
    }
    get agentCode() {
        return this._agentCode;
    }
    get agentName() {
        return this._agentName;
    }
    toString() {
        return `${this._agentName}, ${this._agentCode}`;
    }
}
try {
    let ram = new InsuranceAgent(7, 'ramesh');
    console.log(ram.agentName);
}
catch (error) {
    console.log(error);
}
