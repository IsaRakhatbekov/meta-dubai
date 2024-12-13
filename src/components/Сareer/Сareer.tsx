import Image from "next/image";
import styles from "./Сareer.module.scss";
import dubaiPhoto from "@/public/images/towerSunset.png";

export const Сareer = () => {
  return (
    <section className={styles.career} id="career">
      <div className={`${styles.careerContainer} container`}>
        <h2 className={styles.careerTitle}>
          Как я достигну карьеры в международной <span>компании?</span>
        </h2>
        <p className={styles.subtitle}>
          Открой мир программирования в Дубае!Освой востребованные навыки вместе
          с опытными менторами и сделай шаг к успешной карьере в IT.
        </p>
        <ul className={styles.careerWrapper}>
          <li className={styles.careerContent}>
            <div className={styles.block}>
              <span className={styles.num}>0.1</span>
              <div className={styles.innerTitleWrapper}>
                <h3 className={styles.innerTitle}>
                  Встречи с ведущими разработчиками
                </h3>
                <p className={styles.text}>Получение ценных знаний и опыта</p>
              </div>
            </div>
            <div className={styles.block}>
              <span className={styles.num}>0.2</span>
              <div className={styles.innerTitleWrapper}>
                <h3 className={styles.innerTitle}>Тренинг по собеседованиям</h3>
                <p className={styles.text}>
                  Овладение навыками для успешного прохождения
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <span className={styles.num}>0.3</span>
              <div className={styles.innerTitleWrapper}>
                <h3 className={styles.innerTitle}>Профессиональное резюме</h3>
                <p className={styles.text}>
                  Составление резюме по мировым стандартам
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <span className={styles.num}>0.4</span>
              <div className={styles.innerTitleWrapper}>
                <h3 className={styles.innerTitle}>
                  Разбор тех. Задач на интервью
                </h3>
                <p className={styles.text}>
                  Отработка задач для технических интервью
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <span className={styles.num}>0.5</span>
              <div className={styles.innerTitleWrapper}>
                <h3 className={styles.innerTitle}>
                  Выход на мировые компании{" "}
                </h3>
                <p className={styles.text}>
                  Подача резюме в крупные IT-компании
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <span className={styles.num}>0.6</span>
              <div className={styles.innerTitleWrapper}>
                <h3 className={styles.innerTitle}>Финальный шаг к карьере</h3>
                <p className={styles.text}>
                  Полное сопровождение после успешного собеседования
                </p>
              </div>
            </div>
          </li>
          <li className={styles.careerImgWrapper}>
            <Image src={dubaiPhoto} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};
