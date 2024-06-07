'use client';
import React, { useRef } from 'react';
import styles from './header.module.scss';

const header = () => {
  const handleClick = (goTo: string) => {
    const element = document.getElementById(goTo);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <h1>SNOW</h1>
      <div className={styles.links}>
        <a href='#about'>Sobre nosotros</a>
        <a href='#services'>Servicios</a>
        <a href='#contact'>Contacto</a>
      </div>
    </div>
  );
};

export default header;
