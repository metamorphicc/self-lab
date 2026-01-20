"use client";
import { motion } from "framer-motion";
import { Portal } from "../components/Portal";
import { ModalWindow } from "../components/ModalWindow";
import { useState } from "react";

export default function Home({}) {
  const [isClose, setIsClose] = useState(true);
  return (
    <>
        <ModalWindow
          isOpen={isClose}
          onClose={() => setIsClose(false)}
        ></ModalWindow>

    </>
  );
}
