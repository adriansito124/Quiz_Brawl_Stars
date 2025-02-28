"use client";
import Image from "next/image";
import logo from "@/assets/esportes.png";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Escolha um esporte:" foto={logo.src} r1={"Vôlei"} r2={"Basquete"} r3={"Futebol"} r4={"Tênis"} r5={"Natação"} r6={"Não gosto de esportes"} rota={"9"} nrota={8}></Screen>
    </>
  );
}
