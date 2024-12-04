import styles from "./Hero.module.scss";
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroWrapper}>
          <h1 className={styles.heroMainTitle}>Твоя KарьEра</h1>
          <h2 className={styles.heroSubtitle}>
            начинается с<span> нашего</span> обучения
          </h2>
          <p className={styles.heroText}>
            Открой мир программирования в Дубае!Освой востребованные навыки
            вместе с опытными менторами и сделай шаг к успешной карьере в IT.
          </p>
          <a className={styles.heroLink} href="#">
            Измени свою жизнь
          </a>
        </div>
      </div>
    </section>
  );
};
