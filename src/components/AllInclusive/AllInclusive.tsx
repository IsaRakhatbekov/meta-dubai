import { useEffect, useRef, useState } from "react";
import styles from "./AllInclusive.module.scss";

export const AllInclusive = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const { top, height } = wrapperRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 1;

      if (top <= triggerPoint && top + height >= 0) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.allInclusive} id="allInclusive">
      <div className={`${styles.allInclusiveContainer} container`}>
        <div ref={wrapperRef} className={styles.wrapper}>
          <div
            className={`${styles.images} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          ></div>
          <div
            className={`${styles.images} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          ></div>
          <div
            className={`${styles.images} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          ></div>
          <div
            className={`${styles.images} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          ></div>
          <div
            className={`${styles.images} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          ></div>
          <div
            className={`${styles.images} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          ></div>
          <div className={styles.inner}>
            <h3 className={styles.title}>ВСЁ ВКЛЮЧЕНО</h3>
            <div className={styles.list}>
              <div className={styles.left}>
                <div className={styles.item}>
                  <span className={styles.first}>1</span>
                  <p className={styles.text}>питание</p>
                </div>
                <div className={styles.item}>
                  <span className={styles.second}>2</span>
                  <p className={styles.text}>проживание</p>
                </div>
                <div className={styles.item}>
                  <span className={styles.third}>3</span>
                  <p className={styles.text}>медстраховка</p>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.item}>
                  <span className={styles.fourth}>4</span>
                  <p className={styles.text}>виза</p>
                </div>
                <div className={styles.item}>
                  <span className={styles.fifth}>5</span>
                  <p className={styles.text}>каршеринг</p>
                </div>
                <div className={styles.item}>
                  <span className={styles.sixth}>6</span>
                  <p className={styles.text}>экскурсии</p>
                </div>
              </div>
            </div>
            <h3 className={styles.subtitle}>
              Дополнительные финансы вам не понадобятся
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
