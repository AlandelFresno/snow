'use client';
import React from 'react';
import styles from './header.module.scss';

const header = () => {
  const handleClick = () => {
    const element = document.getElementById('main');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <h1 onClick={handleClick}>SNOW</h1>
      <div className={styles.links}>
        <a href="#services">Servicios</a>
        <a href="#about">Sobre nosotros</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className={styles.burgerMenu}></div>
    </div>
  );
};

export default header;
