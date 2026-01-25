"use client";
import { motion } from "framer-motion";
import { Portal } from "../components/Portal";
import { ModalWindow } from "../components/ModalWindow";
import { useState } from "react";

export default function Home({}) {
  const [isClose, setIsClose] = useState(true);
  return (
    <>
      <div className="h-screen w-screen">
        <div className="px-7     flex items-start justify-between">
          <div className="shadow-xs h-screen bg-black w-[300px]">
            <div className="flex items-center gap-3 justify-center flex-col mt-3">
                <h1>Morph</h1> <span>1lvl</span>
            </div>
            <div>
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
          </div>
          <div className="shadow-xs bg-black">fds</div>
          <div className="shadow-xs bg-black">fds</div>
        </div>
      </div>
      {/* <ModalWindow
          isOpen={isClose}
          onClose={() => setIsClose(false)}
        ></ModalWindow> */}
    </>
  );
}
