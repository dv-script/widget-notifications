import { Minus } from "lucide-react";
import { DismissProps } from "./type";

export default function Dismiss({ clicked }: DismissProps) {
  return (
    <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 dark:bg-zinc-800 hover:bg-zinc-700" onClick={clicked}>
      <Minus size="22" className="text-zinc-500" />
    </button>
  );
}
