import React from 'react';
import styles from './services.module.scss';

const services = () => {
  return (
    <div className={styles.container} id="services">
      <div className={styles.service_container}>
        <h3>Servicios</h3>
        <div>
          <p>
            Mantenimiento, reparación e instalación de aires acondicionados.{' '}
          </p>
          <p>Mantenimiento, reparación e instalación de grupos generadores.</p>
          <p>Mantenimiento de centrales telefonicas publicas TDM e IP.</p>
        </div>
      </div>
      <img />
    </div>
  );
};

export default services;
