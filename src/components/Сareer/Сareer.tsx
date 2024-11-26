import Image from "next/image";
import styles from "./Сareer.module.scss";
import dubaiPhoto from "@/public/images/towerSunset.png";

export const Сareer = () => {
  return (
    <section className={styles.career}>
      <div className={`${styles.careerContainer} container`}>
        <h2 className={styles.careerTitle}>
          Как я достигну карьеры в международной компании?
        </h2>
        <ul className={styles.careerWrapper}>
          <li className={styles.careerContent}>
            <div className={styles.block}>
              <h3 className={styles.innerTitle}>
                Встречи с ведущими разработчиками
              </h3>
              <p className={styles.text}>Получение ценных знаний и опыта</p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.innerTitle}>Тренинг по собеседованиям</h3>
              <p className={styles.text}>
                Овладение навыками для успешного прохождения
              </p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.innerTitle}>Профессиональное резюме</h3>
              <p className={styles.text}>
                Составление резюме по мировым стандартам
              </p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.innerTitle}>
                Разбор тех. Задач на интервью
              </h3>
              <p className={styles.text}>
                Отработка задач для технических интервью
              </p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.innerTitle}>Выход на мировые компании </h3>
              <p className={styles.text}>Подача резюме в крупные IT-компании</p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.innerTitle}>Финальный шаг к карьере</h3>
              <p className={styles.text}>
                Полное сопровождение после успешного собеседования
              </p>
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
