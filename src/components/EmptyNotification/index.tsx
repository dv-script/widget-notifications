import { motion } from "framer-motion";
import { Squirrel } from "lucide-react";

export default function EmptyNotification() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
      <div className="bg-zinc-200 dark:bg-text px-8 py-4 flex items-center justify-center gap-2">
        <Squirrel className="inline-block text-zinc-800" size={24} />
        <p className="text-lg text-center leading-relaxed text-zinc-800 dark:text-zinc-800">
          Empty
        </p>
      </div>
    </motion.div>
  );
}
