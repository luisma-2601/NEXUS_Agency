import { useCallback, useState } from 'react';
import { localReply } from '../data/localFaq';
import type { ChatMessage, N8nChatResponse } from '../types/chat';

const GREETING: ChatMessage = {
  id: 'greeting',
  sender: 'bot',
  text: '¡Hola! 👋 Soy el asistente virtual de Nexus. Puedo responder preguntas sobre nuestros servicios de automatización y páginas web. ¿En qué te ayudo?',
};

function newId() {
  return Math.random().toString(36).slice(2, 10);
}

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [sessionId] = useState(() => 'session-' + newId());

  const toggleOpen = useCallback(() => setIsOpen((open) => !open), []);
  const close = useCallback(() => setIsOpen(false), []);

  const sendToBot = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      setMessages((prev) => [...prev, { id: newId(), sender: 'user', text: trimmed }]);
      setShowQuickReplies(false);
      setIsTyping(true);

      let replyText: string | null = null;
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

      if (webhookUrl) {
        try {
          const res = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: trimmed, sessionId }),
          });
          if (res.ok) {
            const data: N8nChatResponse = await res.json();
            replyText = data.reply ?? data.message ?? null;
          }
        } catch {
          replyText = null; // cae al respaldo local
        }
      }

      if (!replyText) replyText = localReply(trimmed);

      setIsTyping(false);
      setMessages((prev) => [...prev, { id: newId(), sender: 'bot', text: replyText as string }]);
    },
    [sessionId],
  );

  return { isOpen, toggleOpen, close, messages, isTyping, showQuickReplies, sendToBot };
}
