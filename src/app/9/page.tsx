"use client";
import Image from "next/image";
import logo from "@/assets/poderes.png";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Se pudesse ter um super poder qual seria?" foto={logo.src} r1={"Voar"} r2={"Super força"} r3={"Super velocidade"} r4={"Teleportar"} r5={"Invisibilidade"} r6={"Outro"} rota={"10"} nrota={9}></Screen>
    </>
  );
}
