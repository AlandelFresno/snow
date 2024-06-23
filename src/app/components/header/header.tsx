'use client';
import React, { useState } from 'react';
import styles from './header.module.scss';

const header = () => {
  const [showLinks, setShowLinks] = useState(true);

  const handleClick = () => {
    const element = document.getElementById('main');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const burgerClick = () => {
    setShowLinks((v) => !v);
  };

  return (
    <div className={styles.container}>
      <img
        src="/assets/images/snow/snow_isologo_sin_rubro_version_positivo_svg.svg"
        className={styles.isologo}
        onClick={handleClick}
      />
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
        <a href="#services">Servicios</a>
        <a href="#about">Sobre nosotros</a>
        <a href="#contact">Contacto</a>
      </div>
      <div
        className={
          `${styles.showLinks}` + ' ' + `${showLinks ? styles.show : ''}`
        }
      >
        <a href="#services">Servicios</a>
        <a href="#about">Sobre nosotros</a>
        <a href="#contact">Contacto</a>
      </div>
    </div>
  );
};

export default header;
