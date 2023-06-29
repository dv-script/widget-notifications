"use client"

import { useState } from "react";

import Feed from "../Feed";
import Notification from "../Notification";
import MarkAllAsRead from "../MarkAllAsRead";

export default function Widget() {

    const [showFeed, setShowFeed] = useState(false);

    return (
        <div className="w-[448px] rounded overflow-hidden">

            <header className=" bg-zinc-200 dark:bg-zinc-900 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notifications</span>
                <MarkAllAsRead 
                    setAllAsRead={ (readed:boolean) => setShowFeed(readed) }
                />
            </header>

            { !showFeed ? (
                <>
                    <Feed feedTitle="Recents">
                        <Notification 
                            hoursAgo={2}
                            icon="Rocket"
                            typeNotification="Invitation"
                            textNotification="You have received an invitation to join the Rocketseat company."
                        />
                        <Notification 
                            hoursAgo={1}
                            icon="Chat"
                            typeNotification="Chat"
                            textNotification="You have received a message."
                        />
                    </Feed>
                    <Feed feedTitle="Latest">
                        <Notification
                            hoursAgo={2}
                            icon="Chat"
                            typeNotification="Chat"
                            textNotification="You have received a message."
                        />
                    </Feed>
                </>
             ): null}

            
        </div>
    )
}