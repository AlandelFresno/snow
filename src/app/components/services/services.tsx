import React from 'react';
import styles from './services.module.scss';
import Image from 'next/image';

const services = () => {
  return (
    <div className={styles.container} id="services">
      <h3>Servicios</h3>
      <div className={styles.service_container}>
        <div className={styles.list_container}>
          <p>
            Mantenimiento, reparación e instalación de aires acondicionados.
          </p>
          <p>Mantenimiento, reparación e instalación de grupos generadores.</p>
          <p>Mantenimiento de centrales telefónicas públicas TDM e IP.</p>
        </div>
      </div>
      <img src="/assets/images/chip.jpg" />
    </div>
  );
};

export default services;
