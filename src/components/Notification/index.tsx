"use client"

import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import { NotificationProps } from "./type";

import Actions from "../Actions";
import Dismiss from "../Dismiss";
import IconNotification from "../IconNotification";

export default function Notification({ hoursAgo, typeNotification, textNotification, icon }:PropsWithChildren<NotificationProps>) {

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions((prev) => !prev);
    };

    return (
        <>
            <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-start gap-6 cursor-pointer" onClick={toggleOptions}>
                <IconNotification 
                    selectedIcon={icon}
                />
                <div className="flex-1 flex flex-col">
                    <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">{textNotification}</p>
                    <div className="flex items-center gap-1 text-2xs text-zinc-500 dark:text-zinc-400">
                        <span>{typeNotification}</span>
                        <span>{hoursAgo} hour{hoursAgo > 1 ? 's' : ''} ago</span>
                    </div>
                </div>

                {showOptions && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.1 } }}
                        className="m-auto"
                    >
                        {icon === "Chat" ? <Dismiss /> : <Actions />}
                    </motion.div>
                )}
                    
            </div>
        </>
    )
}
