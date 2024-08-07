import React from 'react';
import styles from './services.module.scss';

const Services = () => {
  return (
    <div className={styles.container} id="services">
      <h3>Servicios</h3>
      <div className={styles.service_container}>
        <div className={styles.list_container}>
          <div className={styles.item}>
            <img
              src="/assets/images/snow/icon_star.svg"
              height="20px"
              width="20px"
            />
            <p>
              Mantenimiento, reparación e instalación de aires acondicionados.
            </p>
          </div>
          <div className={styles.item}>
            <img
              src="/assets/images/snow/icon_star.svg"
              height="20px"
              width="20px"
            />
            <p>
              Mantenimiento, reparación e instalación de grupos generadores.
            </p>
          </div>
          <div className={styles.item}>
            <img
              src="/assets/images/snow/icon_star.svg"
              height="20px"
              width="20px"
            />
            <p>Mantenimiento de centrales telefónicas públicas TDM e IP.</p>
          </div>
        </div>
      </div>
      <img className={styles.chip} src="/assets/images/chip.jpg" />
    </div>
  );
};

export default Services;
