"use client";
import Image from "next/image";
import logo from "@/assets/bob.png";
import { Screen } from "@/components/screen";


export default function Home() {
  return (
    <>
      <Screen ask="Qual foi o evento/parceria que vc mais gostou?" foto={logo.src} r1={"Bob Esponja"} r2={"Uno"} r3={"Godzilla"} r4={"Toy Story"} r5={"Anjos x Demonios"} r6={"Padrão"} rota={"4"} nrota={3}></Screen>
    </>
  );
}
