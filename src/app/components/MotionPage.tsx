"use client";
import { motion } from "framer-motion";

export default function DeadlineCard() {
  return (
    <motion.div
      // Анимация появления
      initial={{ opacity: 0, y: 20, scale: 1}}
      animate={{ 
        opacity: 1, 
        y: [0, -5, 0], // Создаем цикл движения вверх-вниз
      }}
      transition={{
        // Настройка для появления
        opacity: { duration: 0.8 },
        y: {
          duration: 4,      // Длительность одного цикла "плавания"
          repeat: Infinity, // Бесконечно
          ease: "easeInOut" // Плавное замедление в крайних точках
        }
      }}
      className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
    >
      <h3 className="text-lg font-bold">Upcoming Deadlines</h3>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Project X</span>
          <span className="text-red-400">2h left</span>
        </div>
        {/* Прогресс-бар */}
        <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="bg-blue-500 h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}