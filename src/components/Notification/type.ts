export interface NotificationProps {
  hoursAgo: number;
  typeNotification: string;
  textNotification: string;
  icon: string;
  id: string;
  clicked(id: string): string;
  showFeed: boolean;
}
