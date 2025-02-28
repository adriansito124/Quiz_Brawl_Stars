"use client";
import Image from "next/image";
import logo from "@/assets/cores.jpg";
import { Screen } from "@/components/screen";
import { useRouter } from "next/navigation";


export default function Home() {

    const router = useRouter()

    const respQuestion = (n: number) => {

        var x = localStorage.getItem("resps");
        let nlista: number[] = [];

        if (x) {
            nlista = x.split(" ").map(num => parseInt(num));
        }

        const posicaoDesejada = 7 - 1;


        if (nlista.length < 7) {
            console.log("eita")
            localStorage.setItem("resps", x + " " + n)
        }
        else {
            console.log("oxii")
            nlista.splice(posicaoDesejada, 0, n);
            nlista.pop();
            localStorage.setItem("resps", nlista.join(" "));
        }

        router.push(`/8`)
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
                    <p className="text-4xl transition duration-1000 text-white font-semibold">Cor preferida:</p>
                </div>
                <div className="flex justify-center items-start w-screen mt-40">
                    {7 % 2 == 0 ? <Image src={logo} alt="ícone ideia" className="w-full max-w-80 m-4 hover:scale-110 transition hover:rotate-6 duration-500" width={1000} height={1000} /> : <Image src={logo} alt="ícone ideia" className="w-full max-w-80 m-4 hover:scale-110 transition hover:-rotate-6 duration-500" width={1000} height={1000} />}
                </div>
                <div className="flex flex-row justify-center gap-24 mt-20 flex-wrap">
                    <div className="flex flex-col items-center gap-32 flex-wrap">
                        <button onClick={() => respQuestion(1)} className="bg-pink-800 p-3 text-xl hover:bg-pink-600 rounded-xl border-2 border-pink-950 hover:scale-110 hover:rotate-1 transition">Rosa</button>
                        <button onClick={() => respQuestion(2)} className="bg-green-800 p-3 text-xl hover:bg-green-600 rounded-xl border-2 border-green-950 hover:scale-110 hover:rotate-1 transition">Verde</button>
                    </div>
                    <div className="flex flex-col items-center gap-32 flex-wrap">
                        <button onClick={() => respQuestion(3)} className="bg-black text-gray-400 hover:text-white p-3 text-xl hover:bg-black rounded-xl border-2 border-gray-900 hover:scale-110 hover:rotate-1 transition">Preto</button>
                        <button onClick={() => respQuestion(4)} className="bg-blue-800 p-3 text-xl hover:bg-blue-600 rounded-xl border-2 border-blue-950 hover:scale-110 hover:rotate-1 transition">Azul</button>
                    </div>
                    <div className="flex flex-col items-center gap-32 flex-wrap">
                        <button onClick={() => respQuestion(4)} className="bg-yellow-500 p-3 text-xl hover:bg-yellow-400 rounded-xl border-2 border-yellow-700 hover:scale-110 hover:rotate-1 transition">Amarelo</button>
                        <button onClick={() => respQuestion(6)} className="bg-red-800 p-3 text-xl hover:bg-red-600 rounded-xl border-2 border-red-950 hover:scale-110 hover:rotate-1 transition">Vermelho</button>
                    </div>
                </div>
            </main>
        </>
    );
}
