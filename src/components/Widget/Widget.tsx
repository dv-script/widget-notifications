"use client";

import { useState } from "react";

import Feed from "../Feed";
import Notification from "../Notification";
import MarkAllAsRead from "../MarkAllAsRead";
import EmptyNotification from "../EmptyNotification";

const notificationsTest1 = [
  {
    id: "1",
    hoursAgo: 1,
    typeNotification: "Invitation",
    textNotification:
      "You have received an invitation to join the Rocketseat company.",
    icon: "Rocket",
  },
];

const notificationsTest2 = [
  {
    id: "2",
    hoursAgo: 1,
    typeNotification: "Chat",
    textNotification: "You have received a message.",
    icon: "Chat",
  },
];

export default function Widget() {
  const [showFeed, setShowFeed] = useState(false);
  const [notificationsList1, setNotificationsList1] =
    useState(notificationsTest1);
  const [notificationsList2, setNotificationsList2] =
    useState(notificationsTest2);

  return (
    <div className="w-[448px] rounded overflow-hidden">
      <header className=" bg-zinc-200 dark:bg-zinc-900 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notifications</span>
        <MarkAllAsRead
          setAllAsRead={(readed: boolean) => {
            setTimeout(() => {
              setNotificationsList1([]);
              setNotificationsList2([]);
            }, 600);
            setShowFeed(readed);
          }}
        />
      </header>
      <Feed feedTitle="Recents">
        { notificationsList1.length !== 0 ? (
            notificationsList1.map(
          ({ id, hoursAgo, icon, textNotification, typeNotification }) => (
            <Notification
              clicked={(identificator) => {
                setTimeout(() => {
                  setNotificationsList1((prev) =>
                    prev.filter(({ id }) => id !== identificator)
                  );
                }, 600);
                return id;
              }}
              id={id}
              key={id}
              hoursAgo={hoursAgo}
              icon={icon}
              typeNotification={typeNotification}
              textNotification={textNotification}
              showFeed={showFeed}
            />
          )
        )): <EmptyNotification />}
      </Feed>
      <Feed feedTitle="Latest">
      { notificationsList2.length !== 0 ? (
            notificationsList2.map(
          ({ id, hoursAgo, icon, textNotification, typeNotification }) => (
            <Notification
              clicked={(identificator) => {
                setTimeout(() => {
                  setNotificationsList2((prev) =>
                    prev.filter(({ id }) => id !== identificator)
                  );
                }, 600);
                return id;
              }}
              id={id}
              key={id}
              hoursAgo={hoursAgo}
              icon={icon}
              typeNotification={typeNotification}
              textNotification={textNotification}
              showFeed={showFeed}
            />
          )
        )): <EmptyNotification />}
      </Feed>
    </div>
  );
}
