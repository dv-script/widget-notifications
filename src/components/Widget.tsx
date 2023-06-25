import { Rocket, X, Check } from "lucide-react";

export default function Widget() {
    return (
        <div className="w-[448px] rounded overflow-hidden">

            {/* Header */}
            <header className=" bg-zinc-200 dark:bg-zinc-900 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notifications</span>
                <button className="text-violet-500 font-bold text-xs uppercase hover:text-violet-400">Mark all as read</button>
            </header>

            {/* Recent Section */}
            <section>
                
                {/* Recent Header */}
                <div className="bg-zinc-300 dark:bg-recent-header px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Recents
                </div>
                
                {/* Notifications */}
                <div className="divide-y-2 divide-zinc-300 dark:divide-background">
                    <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3"/>
                        <div className="flex-1 flex flex-col gap-2">
                            
                            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">You have received an invitation to join the Rocketseat company.</p>
                            <div className="flex items-center gap-1 text-2xs text-zinc-500 dark:text-zinc-400">
                                <span>Invitation</span>
                                <span>2 hours ago</span>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3"/>
                        <div className="flex-1 flex flex-col gap-2">
                            
                            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">You have received an invitation to join the Rocketseat company.</p>
                            <div className="flex items-center gap-1 text-2xs text-zinc-500 dark:text-zinc-400">
                                <span>Invitation</span>
                                <span>2 hours ago</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 self-center">
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 hover:bg-zinc-700">
                                <X className="w-3 h-3 text-zinc-50"/>
                            </button>
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-400">
                                <Check className="w-3 h-3 text-zinc-50"/>  
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* Latest Section */}
            <section>
                
                {/* Latest Header */}
                <div className="bg-zinc-300 dark:bg-recent-header px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Latest
                </div>
                
                {/* Notifications */}
                <div className="divide-y-2 divide-zinc-300 dark:divide-background">
                    <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3"/>
                        <div className="flex-1 flex flex-col gap-2">
                            
                            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-400">You have received an invitation to join the Rocketseat company.</p>
                            <div className="flex items-center gap-1 text-2xs text-zinc-500 dark:text-zinc-400">
                                <span>Invitation</span>
                                <span>2 hours ago</span>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3"/>
                        <div className="flex-1 flex flex-col gap-2">
                            
                            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-400">You have received an invitation to join the Rocketseat company.</p>
                            <div className="flex items-center gap-1 text-2xs text-zinc-500 dark:text-zinc-400">
                                <span>Invitation</span>
                                <span>2 hours ago</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 self-center">
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 hover:bg-zinc-700">
                                <X className="w-3 h-3 text-zinc-50"/>
                            </button>
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-400">
                                <Check className="w-3 h-3 text-zinc-50"/>  
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}