"use client";
import { BestChoice } from "../components/BestChoice/BestChoice";
// import { Dubai } from "../components/Dubai/Dubai";
import { Footer } from "../components/Footer/Footer";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { IsThisMine } from "../components/IsThisMine/IsThisMine";
import { Receive } from "../components/Receive/Receive";
import { Сareer } from "../components/Сareer/Сareer";
import styles from "./page.module.css";
import { AllInclusive } from "../components/AllInclusive/AllInclusive";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Receive />
        <IsThisMine />
        <BestChoice />
        <Сareer />
        {/* <Dubai /> */}
        <AllInclusive />
        <Form />
      </main>
      <Footer />
    </div>
  );
}
