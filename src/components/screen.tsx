"use client";
import Image from "next/image";
import { useState } from "react";

interface ScreenProps {
    foto: string;
    ask: string;
    r1: string;
    r2: string;
    r3: string;
    r4: string;
}

export const Screen: React.FC<ScreenProps> = ({ ask, foto, r1, r2, r3, r4 }) => {

    const brawlers: string[] = [];

    const respQuestion = () => {
        brawlers.forEach(element => {
            var x = localStorage.getItem(element);
            if (x) {
                localStorage.setItem(element, x + 1)
            }
        });
    }

    const style =
    {
        main: "min-h-screen w-full bg-blue-400 flex flex-col justify-start text-black",
        botao: "p-2 bg-slate-700 rounded-md px-5 hover:bg-slate-600 transition",
    }

    return (

        <main className={style.main}>
            <div className="w-full p-5 bg-blue-500 fixed top-0 justify-center items-center flex">
                <p className="text-4xl transition duration-1000 text-white font-semibold">{ask}</p>
            </div>
            <div className="flex justify-center items-start w-screen mt-40">
                <Image src={foto} alt="ícone ideia" className="w-full max-w-60 m-4 hover:scale-110 transition hover:rotate-6 duration-500" width={1000} height={1000}/>
            </div>
            <div className="flex flex-col items-center gap-24 mt-20 group">
                <div className="flex flex-row justify-center gap-32 flex-wrap">
                    <button onClick={() => respQuestion()} className="bg-orange-800 p-3 text-xl hover:bg-orange-600 rounded-xl border-2 border-orange-950 hover:scale-110 hover:rotate-1 transition">{r1}</button>
                    <button onClick={() => respQuestion()} className="bg-orange-800 p-3 text-xl hover:bg-orange-600 rounded-xl border-2 border-orange-950 hover:scale-110 hover:rotate-1 transition">{r2}</button>
                </div>
                <div className="flex flex-row justify-center gap-32 flex-wrap">
                    <button onClick={() => respQuestion()} className="bg-orange-800 p-3 text-xl hover:bg-orange-600 rounded-xl border-2 border-orange-950 hover:scale-110 hover:rotate-1 transition">{r3}</button>
                    <button onClick={() => respQuestion()} className="bg-orange-800 p-3 text-xl hover:bg-orange-600 rounded-xl border-2 border-orange-950 hover:scale-110 hover:rotate-1 transition">{r3}</button>
                </div>
            </div>
        </main>

    )
}