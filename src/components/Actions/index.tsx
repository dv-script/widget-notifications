import { X, Check } from "lucide-react";
import { ActionsProps } from "./type";

export default function Actions({ clicked }: ActionsProps) {
  return (
    <div className="flex gap-2 self-center">
      <button
        className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 dark:bg-zinc-800 hover:bg-zinc-700"
        onClick={clicked}
      >
        <X size="20" className="text-zinc-50" />
      </button>
      <button
        className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-400"
        onClick={clicked}
      >
        <Check size="20" className="text-zinc-50" />
      </button>
    </div>
  );
}
