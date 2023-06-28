import Feed from "../Feed";
import Notification from "../Notification";

export default function Widget() {
    return (
        <div className="w-[448px] rounded overflow-hidden">

            {/* Header */}
            <header className=" bg-zinc-200 dark:bg-zinc-900 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notifications</span>
                <button className="text-violet-500 font-bold text-xs uppercase hover:text-violet-400">Mark all as read</button>
            </header>

            <Feed feedTitle="Recents">
                <Notification 
                    hoursAgo={2}
                    typeNotification="Invatation"
                    textNotification="You have received an invitation to join the Rocketseat company."
                />
                <Notification 
                    hoursAgo={2}
                    typeNotification="Invatation"
                    textNotification="You have received an invitation to join the Rocketseat company."
                />
                <Notification 
                    hoursAgo={2}
                    typeNotification="Invatation"
                    textNotification="You have received an invitation to join the Rocketseat company."
                />
            </Feed>

        </div>
    )
}