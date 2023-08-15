import { AgentResponse } from './apiTypes';
interface ClientOptions {
    apiKey: string;
    agentId: string;
    baseUrl?: string;
}
export declare class MagickClient {
    private apiKey;
    private agentId;
    private baseUrl;
    constructor({ apiKey, agentId, baseUrl }: ClientOptions);
    get(content: string): Promise<AgentResponse>;
}
export {};
