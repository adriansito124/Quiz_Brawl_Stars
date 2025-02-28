"use client";
import Image from "next/image";
import logo from "@/assets/briga.jpg";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Se seu amigo estiver em uma briga o que você faz?" foto={logo.src} r1={"Foge"} r2={"Vai lutar junto"} r3={"Pede ajuda pras pessoas"} r4={"Fica assistindo"} r5={"Ajuda o inimigo"} r6={"Apanha no lugar dele"} rota={"11"} nrota={10}></Screen>
    </>
  );
}
