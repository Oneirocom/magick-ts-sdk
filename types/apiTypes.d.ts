export interface AgentResponse {
    content: string;
}
export interface ApiResponse<T> {
    data?: T;
    error?: string;
}
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
