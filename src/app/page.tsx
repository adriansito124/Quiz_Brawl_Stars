"use client";
import Image from "next/image";
import logo from "@/assets/logoBrau.jpg";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Pergunta?" foto={logo.src} r1={"resposta1"} r2={"resposta2"} r3={"resposta3"} r4={"resposta4"} rota={"2"}></Screen>
    </>
  );
}
