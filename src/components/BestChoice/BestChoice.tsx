import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./BestChoice.module.scss";

import blackOne from "@/public/images/BestChoice/1.png";
import blackTwo from "@/public/images/BestChoice/2.png";
import blackFour from "@/public/images/BestChoice/4.png";
import blackFive from "@/public/images/BestChoice/5.png";

import azat1 from "@/public/images/azat1.png";
import azat2 from "@/public/images/azat2.png";

export const BestChoice: React.FC = () => {
  const choiceRef = useRef<HTMLDivElement | null>(null);
  const isScrollBlocked = useRef(false);

  const handleScroll = (e: WheelEvent) => {
    if (!choiceRef.current) return;

    const rect = choiceRef.current.getBoundingClientRect();

    // Проверяем, находится ли нижняя часть секции в видимой области
    if (rect.bottom <= window.innerHeight && rect.top <= 0) {
      if (!isScrollBlocked.current) {
        isScrollBlocked.current = true; // Блокируем скролл
        e.preventDefault();
        console.log("Скролл заблокирован на секции choice.");
      }
    } else {
      isScrollBlocked.current = false; // Разрешаем скролл, если пользователь не в зоне секции
    }
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      handleScroll(e);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className={styles.choice} ref={choiceRef}>
      <div className={`${styles.choiceContainer} container`}>
        <h2 className={styles.choiceTitle}>
          Почему это обучение — лучший выбор для моего будущего?
        </h2>
        <ul className={styles.choiceWrapper}>
          {/* Black Block */}
          <li className={styles.black}>
            <div className={styles.blackTextWrapper}>
              <h3 className={styles.blackInnerTitle}>
                Лучшее место для обучения
              </h3>
              <p className={styles.blackText}>
                Dubai Knowledge Park — это не просто место для учебы, это центр
                возможностей на мировом уровне.
              </p>
              <ul className={styles.blackList}>
                <li className={styles.blackItem}>
                  <p className={styles.blackText}>• Мировые компании</p>
                </li>
                <li className={styles.blackItem}>
                  <p className={styles.blackText}>• Центр Дубая</p>
                </li>
                <li className={styles.blackItem}>
                  <p className={styles.blackText}>• Престижная локация</p>
                </li>
                <li className={styles.blackItem}>
                  <p className={styles.blackText}>• IT-окружение</p>
                </li>
              </ul>
            </div>
            <div className={styles.blackImgWrapper}>
              <Image src={blackOne} alt="Black Block Image 1" />
              <Image src={blackTwo} alt="Black Block Image 2" />
              <Image src={blackFour} alt="Black Block Image 4" />
              <Image src={blackFive} alt="Black Block Image 5" />
            </div>
          </li>

          {/* White Block */}
          <li className={styles.white}>
            <div className={styles.whiteTextWrapper}>
              <h3 className={styles.whiteInnerTitle}>
                Тот, кто знает путь к результату
              </h3>
              <p className={styles.whiteText}>
                Азат Байсынов — автор курса, основанного на его опыте в
                международных IT-компаниях. Он разработал подход, помогающий
                освоить ключевые навыки в IT.
              </p>
              <ul className={styles.whiteList}>
                <li className={styles.whiteItem}>
                  <p className={styles.whiteText}>• 4 года разработки</p>
                </li>
                <li className={styles.whiteItem}>
                  <p className={styles.whiteText}>• 3 года преподавания</p>
                </li>
                <li className={styles.whiteItem}>
                  <p className={styles.whiteText}>• 150+ учеников</p>
                </li>
                <li className={styles.whiteItem}>
                  <p className={styles.whiteText}>
                    • Опыт в международных компаниях
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.whiteImgWrapper}>
              <Image src={azat1} alt="White Block Image 1" />
              <Image src={azat2} alt="White Block Image 2" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
