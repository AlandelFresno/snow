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
      <div className={styles.chipWrapper}>
        <Image
          className={styles.chip}
          src="/assets/images/IRL/IMG-20241001-WA0025.jpg"
          alt="Snow team"
          fill
          quality={75}
          priority
          sizes="50vw"
        />
      </div>
    </div>
  );
};

export default Services;
