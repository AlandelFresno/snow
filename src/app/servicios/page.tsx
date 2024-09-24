import React from 'react';
import styles from './pages.module.scss';

const services = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Servicios que ofrecemos</h2>
      <div className={styles.airListContainer}>
        <h3>
          <b>
            Mantenimiento, reparación e instalación de aires acondicionados.
          </b>
        </h3>
        <div className={styles.airList}>
          <div className={styles.airListItem}>
            <h5>
              <b>Compresores</b>
            </h5>
            <p>Presión de alta</p>
            <p>Presión de baja</p>
            <p>Amperaje</p>
            <p>Borneras</p>
            <p>Regulación de presostatos</p>
            <p>Regulación de térmicos</p>
          </div>
          <div className={styles.airListItemCombo}>
            <div>
              <h5>
                <b>Refrigerante</b>
              </h5>
              <p>Control de carga</p>
            </div>
            <div>
              <h5>
                <b>Ventiladores</b>
              </h5>
              <p>Correas</p>
              <p>Amperaje</p>
              <p>Borneras</p>
            </div>
          </div>
          <div className={styles.airListItem}>
            <h5>
              <b>Tableros eléctricos</b>
            </h5>
            <p>Inspección general y limpieza</p>
            <p>control de enclavamientos</p>
            <p>Aguste de borneras</p>
            <p>Limpieza de contactos</p>
          </div>
          <div className={styles.airListItemCombo}>
            <div>
              <h5>
                <b>Serpentinas</b>
              </h5>
              <p>Limpieza exterior</p>
            </div>
            <div>
              <h5>
                <b>Filtros de aire</b>
              </h5>
              <p>Inspeccion y limpieza</p>
            </div>
          </div>
          <div className={styles.airListItem}>
            <h5>
              <b>Bandeja de condesado</b>
            </h5>
            <p>Limpieza de bandeja</p>
            <p>Limpieza de desagote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
