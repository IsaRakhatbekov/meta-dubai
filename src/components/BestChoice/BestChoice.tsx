import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./BestChoice.module.scss";

import blackOne from "@/public/images/BestChoice/1.png";
import blackTwo from "@/public/images/BestChoice/2.png";
import blackThird from "@/public/images/BestChoice/3.png";
import blackFourth from "@/public/images/BestChoice/4.png";
import blackFifth from "@/public/images/BestChoice/5.png";

import azat1 from "@/public/images/azat1.png";
import azat2 from "@/public/images/azat2.png";

export const BestChoice: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const choiceRef = useRef<HTMLDivElement | null>(null);
  const choiceWrapperRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const choiceElement = choiceRef.current;
      const choiceWrapperElement = choiceWrapperRef.current;

      if (!choiceElement || !choiceWrapperElement) return;

      const choiceRect = choiceElement.getBoundingClientRect();
      const choiceWrapperRect = choiceWrapperElement.getBoundingClientRect();

      const choiceMiddle = choiceRect.top + choiceRect.height / 2;
      const sectionMiddle =
        choiceWrapperRect.top + choiceWrapperRect.height / 2;

      const blackBlock = choiceElement.querySelector(`.${styles.black}`);
      const whiteBlock = choiceElement.querySelector(`.${styles.white}`);

      if (sectionMiddle >= choiceMiddle) {
        console.log("Дошел до 50% высоты блока choice");
        blackBlock?.classList.add(styles.blackActive);
        whiteBlock?.classList.add(styles.whiteActive);
      } else {
        blackBlock?.classList.remove(styles.blackActive);
        whiteBlock?.classList.remove(styles.whiteActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className={styles.choice} id="choice" ref={choiceRef}>
      <div className={`${styles.choiceContainer} container`}>
        <h2 className={styles.choiceTitle}>
          Почему это обучение — лучший выбор для моего будущего?
        </h2>
        <ul className={styles.choiceWrapper} ref={choiceWrapperRef}>
          {/* Black Block */}
          <li className={styles.black}>
            <div className={styles.blackTextWrapper}>
              <h3 className={styles.blackInnerTitle}>
                Лучшее место для обучения
              </h3>
              <p className={styles.blackText}>
                Dubai Knowledge Park — это не просто место для учебы, это центр
                возможностей на мировом уровне Современные учебные аудитории,
                доступ к новейшим технологиям и вдохновляющая атмосфера делают
                наше обучение лучшим местом для получения знаний
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
            <div className={styles.blackImagesWrapper}>
              <div
                className={`${styles.blackImgFirst} ${styles.blackImgWrapper}`}
              >
                <Image className={styles.blackImg} src={blackOne} alt="" />
              </div>
              <div
                className={`${styles.blackImgSecond} ${styles.blackImgWrapper}`}
              >
                <Image className={styles.blackImg} src={blackTwo} alt="" />
              </div>
              <div
                className={`${styles.blackImgThird} ${styles.blackImgWrapper}`}
              >
                <Image className={styles.blackImg} src={blackThird} alt="" />
              </div>
              <div
                className={`${styles.blackImgFourth} ${styles.blackImgWrapper}`}
              >
                <Image className={styles.blackImg} src={blackFourth} alt="" />
              </div>
              <div
                className={`${styles.blackImgFifth} ${styles.blackImgWrapper}`}
              >
                <Image className={styles.blackImg} src={blackFifth} alt="" />
              </div>
            </div>
          </li>

          {/* White Block */}
          <li className={styles.white}>
            <div className={styles.whiteTextWrapper}>
              <h3 className={styles.whiteInnerTitle}>
                Тот, кто знает путь к результату
              </h3>
              <p className={`${styles.whiteText} ${styles.whiteTopText}`}>
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
            <div className={styles.whiteImagesWrapper}>
              <div
                className={`${styles.whiteImgFirst} ${styles.whiteImgWrapper}`}
              >
                <Image className={styles.whiteImg} src={azat1} alt="" />
              </div>
              <div
                className={`${styles.whiteImgSecond} ${styles.whiteImgWrapper}`}
              >
                <Image className={styles.whiteImg} src={azat2} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
