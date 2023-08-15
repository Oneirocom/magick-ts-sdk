// src/agents.ts
import { AgentResponse } from "./apiTypes";
import { apiClient } from "./apiClient";

export async function getAgentContent(
  apiKey: string,
  agentId: string,
  content: string,
  baseUrl?: string
): Promise<AgentResponse> {
  const queryParameters = {
    apiKey: apiKey,
    agentId: agentId,
    content: encodeURIComponent(content),
  };

  const response = await apiClient<AgentResponse>(
    "",
    "GET",
    queryParameters,
    undefined,
    {},
    baseUrl
  );
  if (response.data) {
    return response.data;
  } else {
    throw new Error(response.error || "Failed to fetch agent content");
  }
}
