import { ApiResponse, HttpMethod } from './apiTypes';
export declare function apiClient<T>(endpoint: string, method: HttpMethod, queryParameters?: Record<string, any>, body?: any, customConfig?: RequestInit, baseUrl?: string): Promise<ApiResponse<T>>;
