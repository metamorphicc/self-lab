"use client";
import { motion } from "framer-motion";
import { Portal } from "../components/Portal";
import { ModalWindow } from "../components/ModalWindow";
import { useState } from "react";
import ProgressCircle from "../components/ProgressCircle";

export default function Home({}) {
  const [isClose, setIsClose] = useState(true);
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
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">Профиль</div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">Квесты</div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">Статистика</div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">Свежие новости</div>
                </li>
                <li className="w-full justify-center h-20">
                  <div className="cursor-pointer flex justify-center h-full hover:bg-zinc-700 transition items-center">Настройки</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="shadow-xs items-center justify-center flex h-screen">
            <div className="border w-170 h-140 flex">
                <div>
                    <div className="border w-full">
                    <ProgressCircle/>

                </div>
                <div className="border w-full">
                    <div></div>
                </div>
                </div>
                <div>
                    <div className="border w-full">

                </div>
                <div className="border w-full">

                </div>
                </div>
                
            </div>
          </div>
          <div className="shadow-xs bg-black">незнаю что вьебать сюда так что <p>пусть пока так постоит</p></div>
        </div>
      </div>
      {/* <ModalWindow
          isOpen={isClose}
          onClose={() => setIsClose(false)}
        ></ModalWindow> */}
    </>
  );
}
