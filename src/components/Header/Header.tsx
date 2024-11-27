"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/images/logo.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [burger, setBurger] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickBurgerMenu = () => {
    setBurger((prev) => !prev);
  };

  console.log(burger);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.headerNav}>
          <a className={styles.logoWrapper} href="#">
            <Image src={logo} alt="Logo" />
          </a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Главная
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Преимущества
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Кому подходит
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Почему мы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Карьера
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Дубай
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                "Всё включено"
              </a>
            </li>
          </ul>
          <button
            onClick={handleClickBurgerMenu}
            className={`${styles.burgerBtn} ${
              burger ? styles.burgerActive : ""
            }`}
          >
            <span></span>
          </button>
          <div className={`${styles.menu} ${burger ? styles.menuActive : ""}`}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Главная
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Преимущества
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Кому подходит
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Почему мы
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Карьера
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Дубай
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  "Всё включено"
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
