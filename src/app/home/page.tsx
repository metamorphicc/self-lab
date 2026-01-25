"use client";
import { motion } from "framer-motion";
import { Portal } from "../components/Portal";
import { ModalWindow } from "../components/ModalWindow";
import { useState } from "react";
import ProgressCircle from "../components/ProgressCircle";
import { useRouter } from "next/navigation";

export default function Home({}) {
  const [isClose, setIsClose] = useState(true);
  const router = useRouter();
  return (
    <>
      <div className="h-screen w-screen">
        <div className="px-7 flex items-start justify-between">
          <div className="shadow-xl h-screen bg-black w-[300px]">
            <div className="flex items-center gap-3 justify-center flex-col mt-6">
              <h1>Morph</h1> <span>1lvl</span>
            </div>
            <div className="mt-10">
              <ul className="flex flex-col  items-center gap-3">
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center" onClick={() => router.push("/profile")}>
                    Профиль
                  </div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">
                    Квесты
                  </div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">
                    Статистика
                  </div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">
                    Свежие новости
                  </div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">
                    Настройки
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="shadow-xs items-center justify-center flex h-screen">
            <div className="w-270 h-160 flex">
              <div className="w-1/2 ">
                <div className="border w-full h-1/2 flex items-center justify-center flex-col gap-3 transform -translate-x-7 -translate-y-7">
                  <ProgressCircle />
                  <p>Выполнено квестов: {3}</p>
                  <p>EXP: {4049}</p>
                </div>
                <div className="border w-full h-1/2 flex items-center justify-center -translate-x-7 translate-y-7">
                  <div>quests</div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="border w-full h-1/2 flex items-center justify-center translate-x-7 -translate-y-7">
                  <div>News</div>
                </div>
                <div className="border w-full h-1/2 flex items-center justify-center translate-x-7 translate-y-7">
                  <div>еще какая то залопу</div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xs bg-black">
            незнаю что вьебать сюда так что <p>пусть пока так постоит</p>
          </div>
        </div>
      </div>
    </>
  );
}
