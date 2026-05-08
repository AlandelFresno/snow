'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.scss';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const burgerClick = () => {
    setShowLinks((v) => !v);
  };

  return (
    <header className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" aria-label="Snow — Inicio">
        <Image
          src="/assets/images/snow/snow_isologo_sin_rubro_version_negativo_svg.svg"
          className={styles.isologo}
          alt="Snow"
          width={120}
          height={36}
          priority
        />
      </Link>
      <div className={styles.burgerMenu}>
        {showLinks ? (
          <Image
            onClick={burgerClick}
            src="/assets/images/close.svg"
            className={styles.burger}
            alt="Close menu"
            width={24}
            height={24}
          />
        ) : (
          <Image
            onClick={burgerClick}
            src="/assets/images/burger.svg"
            className={styles.burger}
            alt="Open menu"
            width={24}
            height={24}
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
        <Image
          onClick={burgerClick}
          src="/assets/images/close.svg"
          className={styles.close}
          alt="Close menu"
          width={24}
          height={24}
        />
        <Link href="/servicios" onClick={burgerClick}>Servicios</Link>
        <Link href="/#about" onClick={burgerClick}>Sobre nosotros</Link>
        <Link href="/#contact" onClick={burgerClick}>Contacto</Link>
      </div>
    </header>
  );
};

export default Header;
