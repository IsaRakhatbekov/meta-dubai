"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import styles from "./Dubai.module.scss";

export const Dubai = () => {
  const [showLightDubai, setShowLightDubai] = useState(false);
  const [lightDubaiCompleted, setLightDubaiCompleted] = useState(false);
  const [showNightDubai, setShowNightDubai] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();

  // Параллакс для блока nightDubai
  const parallaxY = useTransform(scrollY, [800, 1200], [0, -150]);

  useEffect(() => {
    const handleScroll = () => {
      const list = document.querySelector(`.${styles.list}`);
      if (!list) return;

      const rect = list.getBoundingClientRect();

      // Показываем lightDubai, когда список появляется в видимой области
      if (rect.top <= window.innerHeight / 2 && !showLightDubai) {
        setShowLightDubai(true);
        controls.start("visible");
      }

      // Показываем nightDubai, когда lightDubai завершает анимацию и пользователь продолжает скроллить
      if (lightDubaiCompleted && !showNightDubai) {
        setShowNightDubai(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, showLightDubai, lightDubaiCompleted, showNightDubai]);

  return (
    <section className={styles.dubai}>
      {/* Список */}
      <ul className={styles.list}>
        <li className={styles.items}></li>
        <li className={styles.items}></li>
        <li className={styles.items}></li>
        <li className={styles.items}></li>
        <li className={styles.items}>DUBAI</li>
        <li className={styles.items}></li>
        <li className={styles.items}></li>
        <li className={styles.items}></li>
        <li className={styles.items}></li>
      </ul>

      {/* LightDubai */}
      {showLightDubai && (
        <motion.div
          className={styles.lightDubai}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={() => {
            setLightDubaiCompleted(true);
          }}
          style={{
            position: lightDubaiCompleted ? "absolute" : "fixed",
            top: lightDubaiCompleted ? "auto" : "0",
          }}
        >
          <div className={styles.lightDubaiContent}>
            <h3>ЯРКАЯ ЖИЗНЬ ДУБАЯ</h3>
            <ul>
              <li>Тимбилдинг на яхте</li>
              <li>Совместные экскурсии по городу</li>
              <li>Тур в сафари</li>
              <li>Выпускной в одном из лучших ресторанов</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* NightDubai с параллакс эффектом */}
      {showNightDubai && (
        <motion.div
          className={styles.nightDubai}
          style={{
            y: parallaxY,
            position: "relative", // Убедитесь, что блок появляется в потоке документа
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.nightDubaiInner}>
            <h3>НОЧЬ</h3>
            <ul>
              <li>Тимбилдинг на яхте</li>
              <li>Совместные экскурсии по городу</li>
              <li>Тур в сафари</li>
              <li>Выпускной в одном из лучших ресторанов</li>
            </ul>
          </div>
        </motion.div>
      )}
    </section>
  );
};
