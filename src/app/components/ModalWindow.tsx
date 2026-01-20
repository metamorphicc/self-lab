"use client";
import { Portal } from "./Portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindow = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null; 

  return (
    <Portal>
      <div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
        onClick={onClose}
      >
        <div
          className="bg-zinc-900 text-white p-8 rounded-2xl w-full max-w-lg flex flex-col gap-4 shadow-2xl"
          onClick={(e) => e.stopPropagation()} 
        >
          <p className="text-center">
            Привет! Для создания твоего профиля требуется некоторая твоя информация.
          </p>
          <button 
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </Portal>
  );
};