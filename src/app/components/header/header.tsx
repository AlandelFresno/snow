import React from 'react';
import styles from './header.module.scss';

function header() {
  return (
    <div className={styles.container}>
      <h1>SNOW</h1>
      <div className={styles.links}>
        <p>Sobre nosotros</p>
        <p>Servicios</p>
        <p>Contacto</p>
      </div>
    </div>
  );
}

export default header;
