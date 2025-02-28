"use client";
import Image from "next/image";
import rarity from "@/assets/raridades.jpg";
import logo from "@/assets/logoBrau.jpg";
import { Screen } from "@/components/screen";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  const Start = () => {

    router.push(`/2`)

    localStorage.setItem("resps", '0')
    
  }

  const style =
  {
    main: "min-h-screen w-full bg-blue-400 flex flex-col justify-start text-black",
    botao: "p-2 bg-blue-700 rounded-md px-5 hover:bg-blue-600 transition",
  }

  return (
    <>
      <main className={style.main}>
        <div className="w-full p-5 bg-blue-500 fixed top-0 justify-center items-center flex">
          <p className="text-4xl transition duration-1000 text-white font-semibold">Quiz do Brawl Stars</p>
        </div>
        <div className="flex flex-col items-center gap-24 mt-20 group">
          <Image src={logo} alt="logo brauzin" className="w-full max-w-60 mt-20 hover:scale-105 opacity-95 hover:opacity-100 transition duration-300 rounded-full hover:-rotate-3"></Image>
          <button onClick={() => Start()} className="bg-orange-800 font-medium p-3 px-10 text-xl hover:bg-orange-600 rounded-xl border-2 border-orange-950 hover:scale-110 transition">Start</button>
        </div>
      </main>
    </>
  );
}
