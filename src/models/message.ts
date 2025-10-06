export interface MessageRequest {
  conversationId: string;
  content: string;
}

export interface MessageResponse {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
}