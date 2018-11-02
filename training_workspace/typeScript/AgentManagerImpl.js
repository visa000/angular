"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentManagerImpl {
    constructor() {
        this.agentList = [];
    }
    addAgent(agent) {
        this.agentList.push(agent);
        return agent.id;
    }
}
let mgr = new AgentManagerImpl();
mgr.addAgent({ id: 100, mobileNumber: 8908908, name: 'vishnu' });
mgr.addAgent({ id: 111, mobileNumber: 123344, name: 'sai' });
mgr.agentList.forEach(agent => console.log(agent.id));
