"use client";
import { useRouter } from "next/navigation";
export default function Profile() {
  const router = useRouter();
  return (
    <>
      <div className="h-screen ">
        <button onClick={() => router.replace("/home")}>go back</button>
        <div className="px-85 h-full">
          <div className="h-60 flex items-center justify-center border rounded-[50px] shadow-xl ">
            <p className="text-[20px] font-bold tracking-[2px]">Profile</p>
          </div>
          <div className="w-full flex gap-5">
            <div className="h-90 w-1/2 flex items-center justify-center border rounded-[30px] shadow-xl mt-5 flex-col">
              <div>
                <p className="py-5 font-bold text-[20px]">Today quests:</p>
              </div>
              <div className="w-full h-full">
                <ul className="h-full grid flex flex-col px-5">
                  <li className="h-full rounded-xl group">
                    <label className="flex items-center gap-4 p-4 bg-zinc-900 rounded-2xl border border-zinc-800 cursor-pointer transition-all hover:border-cyan-500/50">
                      <input type="checkbox" className="peer hidden" />

                      <div
                        className="w-6 h-6 rounded-md border-2 border-zinc-700 flex items-center justify-center transition-all
    "
                      >
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-500 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                  <li className="h-full rounded-xl">2</li>
                  <li className="h-full ">3</li>
                </ul>
              </div>
            </div>
            <div className="h-90 w-1/2 flex items-center justify-center border rounded-[30px] shadow-xl mt-5"></div>
          </div>
          <div className="h-90  flex items-center justify-center border rounded-[30px] shadow-xl mt-5"></div>
        </div>
      </div>
    </>
  );
}
