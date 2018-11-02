export interface Agent {
    id:number; name:string; mobileNumber:number; category?:string;
}


function printAgent(agent:Agent) {
    console.log(agent.name);
    console.log(agent.category);
}

let ram:Agent = {id:101, name:'ramesh', mobileNumber: 1234567890};

printAgent(ram);