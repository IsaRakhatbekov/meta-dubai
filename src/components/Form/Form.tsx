import styles from "./Form.module.scss";

export const Form = () => {
  return (
    <section className={styles.test}>
      <div className={`${styles.testContainer} container`}>
        <h2 className={styles.testTitle}>Заинтересовали?</h2>
        <h5 className={styles.testSubtitle}>Давай пройдем тест)</h5>

        <div className={styles.forward}>
          <h3 className={styles.questionTitle}>
            Что привлекло Ваше внимание в нашем обучении?
          </h3>

          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Перспектива карьерного роста и повышения дохода после обучения
            </label>
          </div>
          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Желание сменить профессию и начать карьеру в IT-сфере
            </label>
          </div>
          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Стремлюсь построить карьеру в международной компании
            </label>
          </div>

          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Рассматриваю возможность переезда в Дубай
            </label>
          </div>

          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Хочу получить качественное образование с международным признанием
            </label>
          </div>
        </div>
        {/* ------------------------------------------------ */}
        <div className={styles.investments}>
          <h3 className={styles.questionTitle}>
            Как вы относитесь к инвестициям в образование для достижения своих
            карьерных целей? 
          </h3>
          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Готов(а) вложить максимум средств для получения премиального
              обучения и максимальных результатов. 
            </label>
          </div>

          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Ограничен(а) в возможностях, но готов(а) вложить средства в
              качественное образование в пределах бюджета.
            </label>
          </div>

          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Ограничен(а) в возможностях, но готов(а) вложить средства в
              качественное образование в пределах бюджета.
            </label>
          </div>

          <div className={styles.checkboxWrapper}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              Предпочитаю минимизировать расходы на обучение и выбрать наиболее
              доступные варианты.
            </label>
          </div>
        </div>
        {/* ------------------------------------------------ */}
        <div className={styles.fromWrapper}>
          <h2 className={styles.formTitle}>Бесплатная консультация)</h2>
          <h5 className={styles.formSubtitle}>
            Оставьте ваши данные и мы проконсультируем вас по всем вопросам
          </h5>
          <form action="#">
            <div className={styles.formInpWrapper}>
              <label htmlFor="#">Имя</label>
              <input name="" id="" type="text" />
            </div>
            <div className={styles.formInpWrapper}>
              <label htmlFor="#">Возраст</label>
              <input name="" id="" type="text" />
            </div>
            <div className={styles.formInpWrapper}>
              <label htmlFor="#">Номер телефона</label>
              <input name="" id="" type="text" />
            </div>
            <div className={styles.formInpWrapper}>
              <label htmlFor="#">Страна проживания</label>
              <input name="" id="" type="text" />
            </div>
            <button className={styles.formBtn}>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};
