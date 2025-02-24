"use client";
import Image from "next/image";
import logo from "@/assets/logoBrau.jpg";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Pergunta2?" foto={logo.src} r1={"resposta1.2"} r2={"resposta2.2"} r3={"resposta3.2"} r4={"resposta4.2"}></Screen>
    </>
  );
}
