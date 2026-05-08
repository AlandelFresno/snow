import Image from 'next/image';
import Link from 'next/link';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Snow — servicios técnicos">
      <div className={styles.imageWrap}>
        <Image
          src="/assets/images/IRL/IMG-20241001-WA0015.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>

      <div className={styles.grid}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Climatización · Energía · Telefonía
          </span>
          <h1 className={styles.title}>
            La técnica<br />
            <em>no se improvisa.</em>
          </h1>
          <p className={styles.lede}>
            Treinta años entrando al equipo. Diagnóstico, mantenimiento y
            reparación sobre aires acondicionados industriales, grupos
            generadores y centrales telefónicas.
          </p>

          <div className={styles.actions}>
            <Link href="/servicios" className={styles.primary}>
              Ver servicios
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="#contact" className={styles.secondary}>
              Contactar
            </Link>
          </div>
        </div>

        <aside className={styles.sidebar} aria-label="Datos clave">
          <div className={styles.kpi}>
            <span className={styles.kpiValue}>30+</span>
            <span className={styles.kpiLabel}>años de oficio</span>
          </div>
          <div className={styles.kpiDivider} aria-hidden="true" />
          <div className={styles.kpi}>
            <span className={styles.kpiValue}>02</span>
            <span className={styles.kpiLabel}>socios ingenieros</span>
          </div>
          <div className={styles.kpiDivider} aria-hidden="true" />
          <div className={styles.kpi}>
            <span className={styles.kpiValue}>03</span>
            <span className={styles.kpiLabel}>especialidades</span>
          </div>
        </aside>
      </div>

      <a href="#about" className={styles.scrollHint} aria-label="Conocé el equipo">
        <span className={styles.scrollLine} aria-hidden="true" />
        <span className={styles.scrollLabel}>Conocé el equipo</span>
      </a>
    </section>
  );
};

export default Hero;
