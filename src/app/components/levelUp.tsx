"use client";

import { motion } from "framer-motion";

export function ExpBar({ xp, maxXp }: { xp: number; maxXp: number }) {

  const percent = Math.min((xp / maxXp) * 100, 100);

  return (
    <div className="w-full h-4 bg-gray-700 rounded overflow-hidden">
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
  
}
