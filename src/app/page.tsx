"use client"
import Image from "next/image";
import DeadlineCard from "./components/MotionPage";
import { redirect, useRouter } from "next/navigation";
import { Redirect } from "next";

export default function notHome() {
  redirect("/home")
}
