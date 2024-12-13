import styles from "./IsThisMine.module.scss";
export const IsThisMine = () => {
  return (
    <section className={styles.mine} id="mine">
      <div className={`${styles.mineContainer} container`}>
        <div className={styles.mineWrapper}>
          <h2 className={styles.mainTitle}>
            Подойдет ли мне это обучение, если:
          </h2>
          <div className={styles.wrapper}>
            <ul className={`${styles.minelist} ${styles.minelistLeft}`}>
              <li className={styles.mineItem}>
                <h3 className={styles.innerTitle}>
                  «Я никогда не программировал»
                </h3>
                <p className={styles.innerText}>
                  Мы устранили все преграды, чтобы вы могли обучиться уверенно,
                  даже без опыта.
                </p>
              </li>
              <li className={styles.mineItem}>
                <h3 className={styles.innerTitle}>
                  «Я боюсь, что не смогу найти работу после обучения»
                </h3>
                <p className={styles.innerText}>
                  Программа включает карьерную поддержку и доступ к
                  международным компаниям для успешного старта.
                </p>
              </li>
            </ul>
            <ul className={`${styles.minelist} ${styles.minelistRight}`}>
              <li className={styles.mineItem}>
                <h3 className={styles.innerTitle}>
                  «Я боюсь переезжать в новую страну»
                </h3>
                <p className={styles.innerText}>
                  Мы поддержим вас с первых дней и поможем адаптироваться,
                  обеспечив комфорт и безопасность в Дубае.
                </p>
              </li>
              <li className={styles.mineItem}>
                <h3 className={styles.innerTitle}>
                  000«Я боюсь сменить профессию и начать все сначала»00
                </h3>
                <p className={styles.innerText}>
                  Боюсь сменить профессию Мы поможем использовать ваш опыт,
                  превратив его в преимущество для новой карьеры.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
