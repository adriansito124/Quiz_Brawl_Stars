"use client";
import Image from "next/image";
import logo from "@/assets/dreamworks.jpg";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Escolha um filme da dream works:" foto={logo.src} r1={"Kung Fu Panda"} r2={"Madagascar"} r3={"Robô Selvagem"} r4={"Shrek"} r5={"Megamente"} r6={"Como Treinar o seu Dragão"} rota={"7"} nrota={6}></Screen>
    </>
  );
}
