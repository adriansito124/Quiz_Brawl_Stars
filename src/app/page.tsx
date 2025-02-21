import Image from "next/image";

const style =
{
  main: "min-h-screen w-full bg-blue-400 flex flex-col justify-start text-black",
  botao: "p-2 bg-slate-700 rounded-md px-5 hover:bg-slate-600 transition",
}
export default function Home() {
  return (
    <>
      <main className={style.main}>
        <div className="w-full h-20 bg-blue-500 fixed top-0 justify-center items-center flex">
          <p className="text-4xl text-white font-semibold">Pergunta aqui</p>
        </div>
        <div className="flex justify-center items-start w-screen mt-40">
          <div className="w-72 h-48 bg-white"></div>
        </div>
        <div className="flex flex-row justify-center gap-24 mt-20 group">
          <div className="flex flex-col gap-32 ">
            <button className="bg-orange-800 p-3 text-xl rounded-xl border-2 border-orange-950 hover:scale-105 hover:rotate-1 transition">Resposta com muito mais</button>
            <button className="bg-orange-800 p-3 text-xl rounded-xl border-2 border-orange-950 hover:scale-105 rotate-180 group-hover:-rotate-180 transition duration-1000">Resposta</button>
          </div>
          <div className="flex flex-col gap-32">
            <button className="bg-orange-800 p-3 text-xl rounded-xl border-2 border-orange-950">Resposta</button>
            <button className="bg-orange-800 p-3 text-xl rounded-xl border-2 border-orange-950">Resposta</button>
          </div>
        </div>
      </main>
    </>
  );
}
