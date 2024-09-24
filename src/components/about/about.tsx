import React from 'react';
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sobre nosotros</h3>
      <p className={styles.body}>
        Somos dos socios con más de 30 años de experiencia en la industria,
        ingenieros recibidos y especializados en nuestros servicios. Nuestros
        conocimientos te aseguran un trabajo excelente. No dudes en
        contactarnos!
      </p>
      <p id="contact"></p>
    </div>
  );
};

export default About;
