import { useChatbot } from '../../hooks/useChatbot';
import { ChatMessageList } from './ChatMessageList';
import { ChatQuickReplies } from './ChatQuickReplies';
import { ChatInput } from './ChatInput';

export function ChatWidget() {
  const { isOpen, toggleOpen, close, messages, isTyping, showQuickReplies, sendToBot } = useChatbot();

  return (
    <>
      <button
        type="button"
        onClick={toggleOpen}
        aria-label="Abrir chat"
        className="fixed bottom-[26px] right-[26px] z-[1200] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-accent-grad text-2xl text-white shadow-chat-toggle transition-transform hover:scale-105"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-[100px] right-[26px] z-[1200] flex h-[500px] max-h-[70vh] w-[360px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-chat-window">
          <div className="flex items-center gap-3 bg-accent-grad px-5 py-[18px] text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">🤖</div>
            <div>
              <b className="block text-[15px]">Asistente Nexus</b>
              <span className="text-xs opacity-85">Normalmente responde al instante</span>
            </div>
            <button type="button" onClick={close} aria-label="Cerrar chat" className="ml-auto text-xl opacity-85">
              ✕
            </button>
          </div>

          <ChatMessageList messages={messages} isTyping={isTyping} />

          {showQuickReplies && <ChatQuickReplies onSelect={sendToBot} />}

          <ChatInput onSend={sendToBot} />
        </div>
      )}
    </>
  );
}
