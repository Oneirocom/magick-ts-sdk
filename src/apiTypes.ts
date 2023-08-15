// src/apiTypes.ts

export interface AgentResponse {
    // ... other fields specific to an agent response
    content: string;
}

export interface ApiResponse<T> {
    data?: T;
    error?: string;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
