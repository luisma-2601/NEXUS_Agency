import { quickReplies } from '../../data/quickReplies';

interface ChatQuickRepliesProps {
  onSelect: (question: string) => void;
}

export function ChatQuickReplies({ onSelect }: ChatQuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2 px-[18px] pb-[14px]">
      {quickReplies.map((question) => (
        <button
          key={question}
          type="button"
          onClick={() => onSelect(question)}
          className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-text-dim transition-colors hover:border-accent hover:text-text"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
