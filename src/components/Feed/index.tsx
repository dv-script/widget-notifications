import { PropsWithChildren } from "react";
import { FeedProps } from "./type";

export default function Feed({
  children,
  feedTitle,
}: PropsWithChildren<FeedProps>) {
  return (
    <section className="divide-y-2 divide-zinc-300 dark:divide-background">
      <div className="bg-zinc-300 dark:bg-recent-header px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400">
        {feedTitle}
      </div>
      {children}
    </section>
  );
}
