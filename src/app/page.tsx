"use client";
import { useRef, useEffect, useState } from "react";
import { BestChoice } from "../components/BestChoice/BestChoice";
// import { Dubai } from "../components/Dubai/Dubai";
import { Footer } from "../components/Footer/Footer";
// import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { IsThisMine } from "../components/IsThisMine/IsThisMine";
import { Receive } from "../components/Receive/Receive";
import { Сareer } from "../components/Сareer/Сareer";
import styles from "./page.module.css";
import { AllInclusive } from "../components/AllInclusive/AllInclusive";

export default function Home() {
  const receiveRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Элемент виден
          console.log("Scrolled to <Receive /> section"); // Сообщение в консоль
        } else {
          setIsVisible(false); // Элемент не виден
        }
      },
      { threshold: 0.3 } // Элемент должен быть видим минимум на 50%
    );

    if (receiveRef.current) {
      observer.observe(receiveRef.current);
    }

    return () => {
      if (receiveRef.current) {
        observer.unobserve(receiveRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <div ref={receiveRef} className={`${isVisible ? styles.animate : ""}`}>
          <Receive />
        </div>
        <IsThisMine />
        <BestChoice />
        <Сareer />
        {/* <Dubai /> */}
        <AllInclusive />
        {/* <Form /> */}
      </main>
      <Footer />
    </div>
  );
}
