import {Agent} from './agent';

export interface AgentManager {
    agentList:Agent[];

    addAgent(agent:Agent):number;
    
}