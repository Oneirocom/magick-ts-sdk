// src/apiClient.ts
import { ApiResponse, HttpMethod } from './apiTypes';

const DEFAULT_BASE_URL = 'http://172.21.84.53:3030/api/';

export async function apiClient<T>(
    endpoint: string,
    method: HttpMethod,
    queryParameters?: Record<string, any>,
    body?: any,
    customConfig: RequestInit = {},
    baseUrl: string = DEFAULT_BASE_URL
): Promise<ApiResponse<T>> {
    const headers = { 'Content-Type': 'application/json' };

    let queryString = "";
    if (queryParameters) {
        const params = new URLSearchParams();
        for (const key in queryParameters) {
            params.append(key, queryParameters[key]);
        }
        queryString = "?" + params.toString();
    }

    const config: RequestInit = {
        method: method,
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${baseUrl}${endpoint}${queryString}`, config);
        const data: ApiResponse<T> = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.error || "API error");
        }
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error('An unknown error occurred.');
        }
    }
}
