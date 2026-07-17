import { useState, type KeyboardEvent } from 'react';

interface ChatInputProps {
  onSend: (text: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState('');

  function handleSend() {
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend();
  }

  return (
    <div className="flex gap-2 border-t border-border bg-surface p-[14px]">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu pregunta..."
        className="flex-1 rounded-lg border border-border bg-surface-2 px-[14px] py-[11px] text-[13.5px] text-text focus:border-accent focus:outline-none"
      />
      <button
        type="button"
        onClick={handleSend}
        aria-label="Enviar mensaje"
        className="w-[42px] rounded-lg bg-accent-grad text-base text-white"
      >
        ➤
      </button>
    </div>
  );
}
