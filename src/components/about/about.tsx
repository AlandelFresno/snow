import React from 'react';
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sobre nosotros</h3>

      <div className={styles.contentWrapper}>
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Años de experiencia</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>Socios ingenieros</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Especializaciones</span>
          </div>
        </div>

        <p className={styles.body}>
          Somos dos socios con más de 30 años de experiencia en la industria,
          ingenieros recibidos y especializados en nuestros servicios. Nuestros
          conocimientos te aseguran un trabajo excelente. No dudes en
          contactarnos!
        </p>
      </div>

      <p id="contact"></p>
    </div>
  );
};

export default About;
