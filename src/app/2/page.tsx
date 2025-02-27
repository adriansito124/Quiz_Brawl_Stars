"use client";
import Image from "next/image";
import logo from "@/assets/classes.jpg";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Escolha uma classe:" foto={logo.src} r1={"Detonador"} r2={"Sniper"} r3={"Tanque"} r4={"Suporte"} r5={"Destruidor"} r6={"Controle"} rota={"3"} nrota={3}></Screen>
    </>
  );
}
