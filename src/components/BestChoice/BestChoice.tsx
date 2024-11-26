import Image from "next/image";
import styles from "./BestChoice.module.scss";
import blackOne from "@/public/images/BestChoice/1.png";
import blackTwo from "@/public/images/BestChoice/2.png";
// import blackThree from "@/public/images/BestChoice/3.png";
import blackFour from "@/public/images/BestChoice/4.png";
import blackFive from "@/public/images/BestChoice/5.png";

import whiteOne from "@/public/images/BestChoice/white1.png";
import whiteTwo from "@/public/images/BestChoice/white2.png";
import whiteThree from "@/public/images/BestChoice/white2.png";
import whiteFour from "@/public/images/BestChoice/white3.png";

export const BestChoice = () => {
  return (
    <section className={styles.choice}>
      <div className={`${styles.choiceContainer} container`}>
        <h2 className={styles.choiceTitle}>
          Почему это обучение — лучший выбор для моего будущего?
        </h2>
        <ul className={styles.choiceWrapper}>
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
            <div className={styles.blackImgWrapper}>
              <div className={styles.blackImg}>
                <Image src={blackOne} alt="" />
              </div>
              <div className={styles.blackImg}>
                <Image src={blackTwo} alt="" />
              </div>
              <div className={styles.blackImg}>
                <Image src={blackTwo} alt="" />
              </div>
              <div className={styles.blackImg}>
                <Image src={blackFour} alt="" />
              </div>
              <div className={styles.blackImg}>
                <Image src={blackFive} alt="" />
              </div>
            </div>
          </li>
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
              <div className={styles.whiteImg}>
                <Image src={whiteOne} alt="" />
              </div>
              <div className={styles.whiteImg}>
                <Image src={blackTwo} alt="" />
              </div>
              <div className={styles.whiteImg}>
                <Image src={whiteTwo} alt="" />
              </div>
              <div className={styles.whiteImg}>
                <Image src={whiteFour} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
