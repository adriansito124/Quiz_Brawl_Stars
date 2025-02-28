"use client";
import Image from "next/image";
import rarity from "@/assets/raridades.jpg";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Escolha uma raridade:" foto={rarity.src} r1={"Raro"} r2={"Épico"} r3={"Mítico"} r4={"Lendário"} rota={"5"} r5={"Inicial"} r6={"Super raro"} nrota={4}></Screen>
    </>
  );
}
