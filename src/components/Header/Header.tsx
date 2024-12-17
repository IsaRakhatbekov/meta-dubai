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
  const handleCloseMenuMobile = () => {
    setBurger(false);
  };
  const handleClickBurgerMenu = () => {
    setBurger((prev) => !prev);
  };
  useEffect(() => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Управление прокруткой страницы для мобильного меню
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [burger]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.headerNav}>
          <a className={styles.logoWrapper} href="#hero">
            <Image src={logo} alt="Logo" />
          </a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#hero">
                Главная
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#receive">
                Преимущества
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#mine">
                Кому подходит
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#choice">
                Почему мы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#career">
                Карьера
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#dubai">
                Дубай
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#allInclusive">
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
                <a
                  onClick={handleCloseMenuMobile}
                  className={styles.link}
                  href="#hero"
                >
                  Главная
                </a>
              </li>
              <li className={styles.item}>
                <a
                  onClick={handleCloseMenuMobile}
                  className={styles.link}
                  href="#receive"
                >
                  Преимущества
                </a>
              </li>
              <li className={styles.item}>
                <a
                  onClick={handleCloseMenuMobile}
                  className={styles.link}
                  href="#mine"
                >
                  Кому подходит
                </a>
              </li>
              <li className={styles.item}>
                <a
                  onClick={handleCloseMenuMobile}
                  className={styles.link}
                  href="#choice"
                >
                  Почему мы
                </a>
              </li>
              <li className={styles.item}>
                <a
                  onClick={handleCloseMenuMobile}
                  className={styles.link}
                  href="#career"
                >
                  Карьера
                </a>
              </li>
              <li className={styles.item}>
                <a
                  onClick={handleCloseMenuMobile}
                  className={styles.link}
                  href="#dubai"
                >
                  Дубай
                </a>
              </li>
              <li className={styles.item}>
                <a
                  onClick={handleCloseMenuMobile}
                  className={styles.link}
                  href="#allInclusive"
                >
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
