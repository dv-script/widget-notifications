import { X, Check } from 'lucide-react';

export default function Actions() {
    return (
        <>
            <div className="flex gap-2 self-center">
                <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 hover:bg-zinc-700">
                    <X className="w-3 h-3 text-zinc-50"/>
                </button>
                <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-400">
                    <Check className="w-3 h-3 text-zinc-50"/>  
                </button>
            </div>
        </>
    )
}