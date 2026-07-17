export type ChatSender = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
}

export interface N8nChatResponse {
  reply?: string;
  message?: string;
}
