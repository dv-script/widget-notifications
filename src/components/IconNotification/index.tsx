import { Rocket, User, Star, Flag, MessageSquare } from "lucide-react";
import { IconNotificationProps, TypeIconsProps } from "./type";

export default function IconNotification({
  selectedIcon,
}: IconNotificationProps) {
  const typeIcons: TypeIconsProps[] = [
    { Rocket: <Rocket /> },
    { User: <User /> },
    { Star: <Star /> },
    { Chat: <MessageSquare /> },
    { Flag: <Flag /> },
  ];

  return (
    <>
      {typeIcons.map((item) => {
        const key = Object.keys(item)[0];
        const component = item[selectedIcon];
        if (component) {
          return (
            <div key={key} className="m-auto">
              {component}
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
