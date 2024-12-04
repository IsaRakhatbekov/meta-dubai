"use client";
import Image from "next/image";
import dubaiTower from "@/public/images/dubaiTower.png";
import styles from "./Receive.module.scss";
import { useEffect, useRef, useState } from "react";

export const Receive = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("Scrolled to <Receive /> section");
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.receive}>
      <div className={`${styles.container} container`}>
        <div
          className={`${styles.receiveInner} ${
            isVisible ? styles.receiveInnerActive : ""
          }`}
        >
          <h2 className={styles.receiveTitle}>
            Что я получу и как это изменит мою жизнь?
          </h2>
          <div className={styles.receiveWrapper}>
            <div className={styles.dubaiTower}>
              <Image src={dubaiTower} alt="Dubai Tower" />
            </div>
            <ul className={styles.receiveList}>
              <li className={styles.receiveItem}>
                <span className={styles.receiveNumber}>1</span>
                <p className={styles.receiveText}>
                  Полная подготовка к международной карьере
                </p>
              </li>
              <li className={styles.receiveItem}>
                <span className={styles.receiveNumber}>2</span>
                <p className={styles.receiveText}>
                  Сертификат, признанный более чем в 100 странах
                </p>
              </li>
              <li className={styles.receiveItem}>
                <span className={styles.receiveNumber}>3</span>
                <p className={styles.receiveText}>
                  Полное покрытие расходов на время пребывания в Дубае
                </p>
              </li>
              <li className={styles.receiveItem}>
                <span className={styles.receiveNumber}>4</span>
                <p className={styles.receiveText}>
                  Прямое взаимодействие с международным IT-сообществом
                </p>
              </li>
              <li className={styles.receiveItem}>
                <span className={styles.receiveNumber}>5</span>
                <p className={styles.receiveText}>
                  Знания, с которыми ты попадешь в любую компанию мира
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.receiveBottom}>
        <div className={`${styles.bottomContainer} container`}>
          <div className={styles.bottomWrapper}>
            <h2 className={styles.bottomTitle}>Все для твоего успеха</h2>
            <p className={styles.bottomText}>
              Ты получишь все для <span>международной карьеры</span>, а также
              ценные связи, которые откроют для тебя
              <span> новые возможности</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
