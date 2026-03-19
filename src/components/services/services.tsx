import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './services.module.scss';

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingBlock}>
        <h3>Servicios</h3>
        <p className={styles.tagline}>Soluciones técnicas con respaldo de experiencia</p>
      </div>
      <div className={styles.service_container}>
        <div className={styles.list_container}>
          <div className={styles.item}>
            <Image
              src="/assets/images/snow/icon_star.svg"
              height={20}
              width={20}
              alt="Star icon"
            />
            <p>
              Mantenimiento, reparación e instalación de aires acondicionados.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/images/snow/icon_star.svg"
              height={20}
              width={20}
              alt="Star icon"
            />
            <p>
              Mantenimiento, reparación e instalación de grupos generadores.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/images/snow/icon_star.svg"
              height={20}
              width={20}
              alt="Star icon"
            />
            <p>Mantenimiento de centrales telefónicas públicas TDM e IP.</p>
          </div>
          <span id="about" className={styles.anchor}></span>
          <Link className={styles.linkItem} href="/servicios">Ver servicios completos →</Link>
        </div>
      </div>
      <Image
        className={styles.chip}
        src="/assets/images/chip.jpg"
        alt="Circuit board"
        width={800}
        height={600}
        quality={85}
        priority
      />
    </div>
  );
};

export default Services;
