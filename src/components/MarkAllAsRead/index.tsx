import { MarkAllAsReadProps } from "./type";

export default function MarkAllAsRead({ setAllAsRead }: MarkAllAsReadProps) {
  return (
    <button
      onClick={() => setAllAsRead(true)}
      className="text-violet-500 font-bold text-xs uppercase hover:text-violet-400"
    >
      Mark all as read
    </button>
  );
}
