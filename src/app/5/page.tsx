"use client";
import Image from "next/image";
import logo from "@/assets/disney.jpg";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Escolha um filme da disney / pixar:" foto={logo.src} r1={"Walle"} r2={"Monstros SA"} r3={"Zootopia"} r4={"Encanto"} r5={"Toy Story"} r6={"Carros"} rota={"6"} nrota={5}></Screen>
    </>
  );
}
