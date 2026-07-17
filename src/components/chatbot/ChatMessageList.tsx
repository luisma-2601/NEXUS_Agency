import { useEffect, useRef } from 'react';
import type { ChatMessage } from '../../types/chat';

interface ChatMessageListProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

function TypingIndicator() {
  return (
    <div className="max-w-[82%] self-start rounded-2xl rounded-bl-sm border border-border bg-surface-2 px-[14px] py-[11px]">
      <div className="flex gap-1 py-1">
        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-text-faint" />
        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-text-faint [animation-delay:0.2s]" />
        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-text-faint [animation-delay:0.4s]" />
      </div>
    </div>
  );
}

export function ChatMessageList({ messages, isTyping }: ChatMessageListProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  return (
    <div ref={bodyRef} className="flex flex-1 flex-col gap-3 overflow-y-auto bg-bg-alt p-[18px]">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={
            msg.sender === 'bot'
              ? 'max-w-[82%] self-start rounded-2xl rounded-bl-sm border border-border bg-surface-2 px-[14px] py-[11px] text-[13.5px] leading-relaxed'
              : 'max-w-[82%] self-end rounded-2xl rounded-br-sm bg-accent-grad px-[14px] py-[11px] text-[13.5px] leading-relaxed text-white'
          }
        >
          {msg.text}
        </div>
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
}
