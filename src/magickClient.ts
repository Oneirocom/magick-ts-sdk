// src/magickClient.ts
import { AgentResponse } from './apiTypes';
import { apiClient } from './apiClient';

interface ClientOptions {
    apiKey: string;
    agentId: string;
    baseUrl?: string;
}

export class MagickClient {
    private apiKey: string;
    private agentId: string;
    private baseUrl: string;

    constructor({ apiKey, agentId, baseUrl = 'http://172.21.84.53:3030/api/' }: ClientOptions) {
        this.apiKey = apiKey;
        this.agentId = agentId;
        this.baseUrl = baseUrl;
    }

    async get(content: string): Promise<AgentResponse> {
        const queryParameters = {
            apiKey: this.apiKey,
            agentId: this.agentId,
            content: encodeURIComponent(content)
        };

        const response = await apiClient<AgentResponse>('', 'GET', queryParameters, undefined, {}, this.baseUrl);
        if (response.data) {
            return response.data;
        } else {
            throw new Error(response.error || "Failed to fetch agent content");
        }
    }

    // ... additional methods can be added here as needed
}
