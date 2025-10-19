export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
  sessionId?: string;
}

export interface ChatResponse {
  message: ChatMessage;
  suggestions?: string[];
  relatedTopics?: string[];
}

export interface ChatRequest {
  message: string;
  sessionId?: string;
  context?: any;
}
