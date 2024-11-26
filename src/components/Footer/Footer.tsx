import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "@/public/images/footerLogo.png";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <nav className={styles.nav}>
          <a className={styles.footerLogo} href="#">
            <Image src={logo} alt="Логотип" />
          </a>
          <div className={styles.some}></div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <h4 className={styles.title}>Разделы</h4>
              <a className={`${styles.footerLink} ${styles.text}`} href="#">
                Главная
              </a>
              <a className={`${styles.footerLink} ${styles.text}`} href="#">
                Преимущества
              </a>
              <a className={`${styles.footerLink} ${styles.text}`} href="#">
                Кому подходит
              </a>
              <a className={`${styles.footerLink} ${styles.text}`} href="#">
                Почему мы
              </a>
              <a className={`${styles.footerLink} ${styles.text}`} href="#">
                Карьера
              </a>
              <a className={`${styles.footerLink} ${styles.text}`} href="#">
                Дубай
              </a>
              <a className={`${styles.footerLink} ${styles.text}`} href="#">
                "Всё включено"
              </a>
            </li>
            <li className={styles.item}>
              <h4 className={styles.title}>Контакты</h4>
              <a className={`${styles.phone} ${styles.text}`} href="">
                +996 555 888 999
              </a>
              <a className={`${styles.phone} ${styles.text}`} href="">
                +996 555 888 999
              </a>
            </li>
            <li className={styles.item}>
              <h4 className={styles.title}>Социальные сети</h4>
              <div className={styles.socialWrapper}>
                <a className={styles.social} href="#">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.657 4.652C18.3722 4.652 18.0938 4.73645 17.857 4.89468C17.6202 5.05291 17.4356 5.27781 17.3266 5.54094C17.2176 5.80406 17.1891 6.0936 17.2447 6.37293C17.3003 6.65226 17.4374 6.90885 17.6388 7.11023C17.8402 7.31162 18.0968 7.44877 18.3761 7.50433C18.6554 7.55989 18.945 7.53138 19.2081 7.42239C19.4712 7.3134 19.6961 7.12883 19.8543 6.89202C20.0126 6.65521 20.097 6.37681 20.097 6.092C20.097 5.71009 19.9453 5.34382 19.6753 5.07377C19.4052 4.80371 19.0389 4.652 18.657 4.652ZM24.177 7.556C24.1537 6.56036 23.9672 5.57528 23.625 4.64C23.3199 3.83976 22.845 3.11513 22.233 2.516C21.6388 1.90091 20.9125 1.42901 20.109 1.136C19.1762 0.783393 18.19 0.592652 17.193 0.572C15.921 0.5 15.513 0.5 12.249 0.5C8.98502 0.5 8.57702 0.5 7.30502 0.572C6.30801 0.592652 5.32184 0.783393 4.38902 1.136C3.58704 1.43198 2.86134 1.90347 2.26502 2.516C1.64993 3.11021 1.17804 3.83653 0.885023 4.64C0.532416 5.57281 0.341675 6.55898 0.321023 7.556C0.249023 8.828 0.249023 9.236 0.249023 12.5C0.249023 15.764 0.249023 16.172 0.321023 17.444C0.341675 18.441 0.532416 19.4272 0.885023 20.36C1.17804 21.1635 1.64993 21.8898 2.26502 22.484C2.86134 23.0965 3.58704 23.568 4.38902 23.864C5.32184 24.2166 6.30801 24.4073 7.30502 24.428C8.57702 24.5 8.98502 24.5 12.249 24.5C15.513 24.5 15.921 24.5 17.193 24.428C18.19 24.4073 19.1762 24.2166 20.109 23.864C20.9125 23.571 21.6388 23.0991 22.233 22.484C22.8477 21.8871 23.323 21.1618 23.625 20.36C23.9672 19.4247 24.1537 18.4396 24.177 17.444C24.177 16.172 24.249 15.764 24.249 12.5C24.249 9.236 24.249 8.828 24.177 7.556ZM22.017 17.3C22.0083 18.0617 21.8703 18.8164 21.609 19.532C21.4174 20.0542 21.1097 20.5261 20.709 20.912C20.3198 21.3086 19.8489 21.6157 19.329 21.812C18.6135 22.0733 17.8588 22.2113 17.097 22.22C15.897 22.28 15.453 22.292 12.297 22.292C9.14102 22.292 8.69702 22.292 7.49702 22.22C6.70609 22.2348 5.91854 22.113 5.16902 21.86C4.67196 21.6537 4.22265 21.3473 3.84902 20.96C3.45073 20.5745 3.14684 20.1022 2.96102 19.58C2.66805 18.8542 2.50556 18.0823 2.48102 17.3C2.48102 16.1 2.40902 15.656 2.40902 12.5C2.40902 9.344 2.40902 8.9 2.48102 7.7C2.4864 6.92127 2.62856 6.14953 2.90102 5.42C3.11228 4.91349 3.43654 4.46199 3.84902 4.1C4.2136 3.6874 4.66417 3.35971 5.16902 3.14C5.90049 2.87605 6.67142 2.7381 7.44902 2.732C8.64902 2.732 9.09302 2.66 12.249 2.66C15.405 2.66 15.849 2.66 17.049 2.732C17.8107 2.74074 18.5655 2.8787 19.281 3.14C19.8263 3.34238 20.3158 3.67142 20.709 4.1C21.1023 4.46861 21.4095 4.91928 21.609 5.42C21.8757 6.15072 22.0138 6.92214 22.017 7.7C22.077 8.9 22.089 9.344 22.089 12.5C22.089 15.656 22.077 16.1 22.017 17.3ZM12.249 6.344C11.032 6.34637 9.84298 6.70943 8.83221 7.3873C7.82144 8.06517 7.03428 9.02744 6.57018 10.1525C6.10609 11.2776 5.98589 12.515 6.22478 13.7083C6.46366 14.9017 7.05091 15.9974 7.91231 16.8572C8.77372 17.7169 9.87064 18.302 11.0645 18.5386C12.2583 18.7751 13.4954 18.6525 14.6196 18.1862C15.7437 17.72 16.7045 16.9309 17.3804 15.9188C18.0563 14.9068 18.417 13.717 18.417 12.5C18.4186 11.6901 18.2601 10.8879 17.9505 10.1395C17.641 9.39117 17.1865 8.71137 16.6133 8.13926C16.04 7.56715 15.3594 7.11401 14.6104 6.80592C13.8614 6.49782 13.0589 6.34084 12.249 6.344ZM12.249 16.496C11.4587 16.496 10.6861 16.2616 10.029 15.8226C9.37183 15.3835 8.85965 14.7594 8.5572 14.0292C8.25475 13.299 8.17562 12.4956 8.32981 11.7204C8.48399 10.9453 8.86457 10.2333 9.42342 9.6744C9.98228 9.11555 10.6943 8.73497 11.4694 8.58078C12.2446 8.4266 13.0481 8.50573 13.7782 8.80818C14.5084 9.11063 15.1325 9.6228 15.5716 10.2799C16.0107 10.9371 16.245 11.7097 16.245 12.5C16.245 13.0248 16.1417 13.5444 15.9408 14.0292C15.74 14.514 15.4457 14.9545 15.0746 15.3256C14.7036 15.6967 14.263 15.991 13.7782 16.1918C13.2934 16.3926 12.7738 16.496 12.249 16.496Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a className={styles.social} href="#">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4521 14.9979C18.211 14.8774 16.6436 14.154 16.4025 14.0334C16.1614 13.9128 15.9202 13.9128 15.6791 14.154C15.438 14.3951 14.9557 15.1185 14.7146 15.3596C14.594 15.6008 14.3529 15.6008 14.1118 15.4802C13.2678 15.1185 12.4238 14.6362 11.7005 14.0334C11.0976 13.4306 10.4948 12.7072 10.0125 11.9838C9.89198 11.7427 10.0125 11.5015 10.1331 11.381C10.2537 11.2604 10.3742 11.0193 10.6154 10.8987C10.7359 10.7782 10.8565 10.537 10.8565 10.4165C10.9771 10.2959 10.9771 10.0548 10.8565 9.93421C10.7359 9.81364 10.1331 8.36686 9.89198 7.76404C9.77141 6.92008 9.53028 6.92008 9.28915 6.92008H8.68633C8.4452 6.92008 8.08351 7.16121 7.96294 7.28178C7.23955 8.00517 6.87786 8.84912 6.87786 9.81364C6.99842 10.8987 7.36012 11.9838 8.0835 12.9483C9.40972 14.8774 11.0976 16.4447 13.1472 17.4092C13.7501 17.6504 14.2323 17.8915 14.8351 18.0121C15.438 18.2532 16.0408 18.2532 16.7642 18.1326C17.6081 18.0121 18.3315 17.4092 18.8138 16.6858C19.0549 16.2036 19.0549 15.7213 18.9343 15.2391L18.4521 14.9979ZM21.4662 4.02652C16.7642 -0.675508 9.16859 -0.675508 4.46656 4.02652C0.608479 7.8846 -0.11491 13.7923 2.53752 18.4943L0.849609 24.6431L7.23955 22.9552C9.04802 23.9197 10.9771 24.402 12.9061 24.402C19.5372 24.402 24.842 19.0971 24.842 12.4661C24.9626 9.33138 23.6364 6.31726 21.4662 4.02652ZM18.211 20.9056C16.6436 21.8701 14.8351 22.473 12.9061 22.473C11.0976 22.473 9.40972 21.9907 7.84238 21.1467L7.48068 20.9056L3.74317 21.8701L4.70769 18.2532L4.46656 17.8915C1.573 13.0689 3.01978 7.04065 7.72181 4.02652C12.4238 1.0124 18.4521 2.57975 21.3456 7.16121C24.2392 11.8632 22.913 18.0121 18.211 20.9056Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a className={styles.social} href="#">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.3957 3.26454C21.9563 2.90022 21.3525 2.80647 20.8234 3.02039L2.90642 10.2538C2.11827 10.5782 1.74236 11.4801 2.06676 12.2682C2.23455 12.6758 2.56853 12.9921 2.98455 13.1376L6.84978 14.4813L8.94451 21.4071C8.94872 21.4212 8.96166 21.4298 8.96709 21.4434C8.98876 21.4986 9.02043 21.5494 9.06041 21.5933C9.0753 21.6109 9.09154 21.6275 9.10887 21.6427C9.16106 21.686 9.22167 21.7181 9.28685 21.7368C9.2968 21.7397 9.30345 21.7485 9.31359 21.7509L9.31945 21.7506L9.32238 21.7518C9.35576 21.7593 9.38982 21.7629 9.42394 21.7626C9.46855 21.761 9.5128 21.7533 9.55529 21.7397C9.56353 21.7374 9.57183 21.738 9.57988 21.7354C9.65245 21.7098 9.71801 21.6677 9.77141 21.6124C9.77764 21.6062 9.7871 21.6051 9.79308 21.5985L12.8068 18.2733L17.2032 21.6776C17.4704 21.8865 17.7997 21.9999 18.1388 21.9999C18.8722 21.9998 19.5052 21.486 19.6564 20.7684L22.9191 4.75086C23.0322 4.19679 22.8309 3.6255 22.3957 3.26454ZM10.0383 15.7948L9.33104 19.2316L7.85619 14.3538L15.1711 10.5447L10.174 15.5419C10.1049 15.611 10.0577 15.699 10.0383 15.7948ZM18.6769 20.5673C18.6386 20.7514 18.5073 20.9023 18.3302 20.9657C18.1573 21.0322 17.962 21.0026 17.8166 20.8876L13.0529 17.1991C12.8467 17.0394 12.5523 17.0654 12.3771 17.2587L10.2815 19.5709L10.9875 16.1434L18.176 8.95399C18.3713 8.75898 18.3716 8.44257 18.1766 8.24726C18.0224 8.09266 17.7856 8.05616 17.592 8.15711L7.22863 13.5538L3.31169 12.1923C3.09819 12.122 2.95299 11.9238 2.95037 11.6991C2.94005 11.4728 3.07402 11.2647 3.28435 11.1806L21.1984 3.94813C21.3855 3.86872 21.6015 3.90199 21.756 4.03407C21.9098 4.15821 21.9805 4.35847 21.9386 4.55164L18.6769 20.5673Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};