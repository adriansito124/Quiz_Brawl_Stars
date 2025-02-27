"use client";
import Image from "next/image";
import logo from "@/assets/bob.png";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Escolha um:" foto={logo.src} r1={"Bob Esponja"} r2={"Uno"} r3={"Godzilla"} r4={"Toy Story"} r5={"Destruidor"} r6={"Controle"} rota={"4"} nrota={4}></Screen>
    </>
  );
}
