import { PropsWithChildren } from 'react'

export default function Feed({ children }:PropsWithChildren) {
    return (
        <section>              
            <div className="bg-zinc-300 dark:bg-recent-header px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400">
                Recents
            </div>
            {children}
        </section>
    )
}