import React, { useRef, FormEvent } from "react";
import styles from "./Form.module.scss";

type FormData = {
  checkboxes: string[];
  [key: string]: string | string[];
};

export const Form: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    const section = sectionRef.current;
    if (!section) return;

    const inputs = section.querySelectorAll<HTMLInputElement>("input");
    const formData: FormData = { checkboxes: [] };

    inputs.forEach((input) => {
      if (input.type === "checkbox") {
        const label = input.parentElement?.textContent?.trim(); // Получаем текст метки
        if (label && input.checked) {
          formData.checkboxes.push(label);
        }
      } else if (input.type === "text") {
        const label = input.previousSibling?.textContent?.trim(); // Получаем текст лейбла
        if (label) {
          formData[label] = input.value;
        }
      }
    });

    console.log(formData); // Выводим собранные данные в консоль
  };

  return (
    <section className={styles.test} ref={sectionRef}>
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
          <form action="#" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formInpWrapper}>
              <label htmlFor="name">Имя</label>
              <input name="name" id="name" type="text" />
            </div>
            <div className={styles.formInpWrapper}>
              <label htmlFor="age">Возраст</label>
              <input name="age" id="age" type="text" />
            </div>
            <div className={styles.formInpWrapper}>
              <label htmlFor="phone">Номер телефона</label>
              <input name="phone" id="phone" type="text" />
            </div>
            <div className={styles.formInpWrapper}>
              <label htmlFor="country">Страна проживания</label>
              <input name="country" id="country" type="text" />
            </div>
            <button className={styles.formBtn} type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
