"use client"

import { motion } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";
import { NotificationProps } from "./type";

import Actions from "../Actions";
import IconNotification from "../IconNotification";

export default function Notification({ hoursAgo, typeNotification, textNotification }:PropsWithChildren<NotificationProps>) {
    const [showActions, setShowActions] = useState(true);

    useEffect(() => {
        setShowActions(false);
    }, []);

    const toggleActions = () => {
        setShowActions(!showActions);
    };

    return (
        <>
            <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-start gap-6 cursor-pointer" onClick={toggleActions}>
                <IconNotification 
                    selectedIcon={typeNotification}
                />
                <div className="flex-1 flex flex-col gap-2">
                    <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">{textNotification}</p>
                    <div className="flex items-center gap-1 text-2xs text-zinc-500 dark:text-zinc-400">
                        <span>{typeNotification}</span>
                        <span>{hoursAgo} hours ago</span>
                    </div>
                </div>
                {showActions && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.2 } }}
                        className="m-auto"
                    >
                        <Actions />
                    </motion.div>
                )}
            </div>
        </>
    )
}
