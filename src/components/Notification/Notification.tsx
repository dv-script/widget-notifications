import { Rocket } from "lucide-react";
import { PropsWithChildren } from "react";
import { NotificationProps } from "./type";

import Actions from "../Actions/Actions";

export default function Notification({ hoursAgo, typeNotification, textNotification }:PropsWithChildren<NotificationProps>) {
    return (
        <>
            <div className="divide-y-2 divide-zinc-300 dark:divide-background">
                <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-start gap-6">
                    <Rocket className="w-6 h-6 text-violet-500 mt-3"/>
                    <div className="flex-1 flex flex-col gap-2">
                        
                        <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">{textNotification}</p>
                        <div className="flex items-center gap-1 text-2xs text-zinc-500 dark:text-zinc-400">
                            <span>{typeNotification}</span>
                            <span>{hoursAgo} hours ago</span>
                        </div>
                    </div>
                    <Actions />
                </div>
            </div>
        </>
    )
}