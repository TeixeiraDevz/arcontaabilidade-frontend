import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { ChatRequest, ChatResponse, ChatMessage } from '../../core/models/assistente.model';

@Injectable({
  providedIn: 'root'
})
export class AssistenteRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    return this.post<ChatResponse>('/ai/chat', request);
  }

  async getChatHistory(sessionId: string): Promise<ChatMessage[]> {
    return this.get<ChatMessage[]>(`/ai/chat/history/${sessionId}`);
  }

  async clearChatHistory(sessionId: string): Promise<void> {
    return this.delete<void>(`/ai/chat/history/${sessionId}`);
  }

  async getSuggestions(context?: string): Promise<string[]> {
    const endpoint = context ? `/ai/suggestions?context=${encodeURIComponent(context)}` : '/ai/suggestions';
    return this.get<string[]>(endpoint);
  }
}
