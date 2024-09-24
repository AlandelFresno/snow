'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

const Header = () => {
  const path = usePathname();
  const [showLinks, setShowLinks] = useState(false);

  const burgerClick = () => {
    setShowLinks((v) => !v);
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <img
          src="/assets/images/snow/snow_isologo_sin_rubro_version_positivo_svg.svg"
          className={styles.isologo}
        />
      </Link>
      <div className={styles.burgerMenu}>
        {showLinks ? (
          <img
            onClick={burgerClick}
            src="/assets/images/close.svg"
            className={styles.burger}
          />
        ) : (
          <img
            onClick={burgerClick}
            src="/assets/images/burger.svg"
            className={styles.burger}
          />
        )}
      </div>
      <div className={styles.links}>
        <Link href="/servicios">Servicios</Link>
        <Link href="/#about">Sobre nosotros</Link>
        <Link href="/#contact">Contacto</Link>
      </div>
      <div
        className={
          `${styles.showLinks}` + ' ' + `${showLinks ? styles.show : ''}`
        }
      >
        <img
          onClick={burgerClick}
          src="/assets/images/close.svg"
          className={styles.close}
        />
        <a href="#services">Servicios</a>
        <a href="#about">Sobre nosotros</a>
        <a href="#contact">Contacto</a>
      </div>
    </div>
  );
};

export default Header;
