import { Minus } from "lucide-react";
import { DismissProps } from "./type";

export default function Dismiss({ clicked }: DismissProps) {
  return (
    <button className="m-auto" onClick={clicked}>
      <Minus size="22" className="text-zinc-500" />
    </button>
  );
}
