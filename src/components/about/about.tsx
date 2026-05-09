import Image from 'next/image';
import styles from './about.module.scss';

const STATS = [
  { value: '30+', label: 'Años de experiencia' },
  { value: '02', label: 'Socios ingenieros' },
  { value: '03', label: 'Especializaciones' },
];

const About = () => {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <span id="about" className={styles.anchor} />

      <div className={styles.inner}>
        <div className={styles.media}>
          <div className={styles.mediaFrame}>
            <Image
              src="/assets/images/IRL/IMG-20241001-WA0021.jpg"
              alt="Equipo Snow trabajando en campo"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.mediaImg}
            />
          </div>
          <div className={styles.mediaTag}>
            <span className={styles.mediaTagDot} aria-hidden="true" />
            En campo · Argentina
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Sobre Snow</span>
          <h2 id="about-heading" className={styles.title}>
            Dos ingenieros. <br />
            <em>Un oficio que no se enseña.</em>
          </h2>
          <p className={styles.body}>
            Empezamos en los noventa, cuando los manuales eran en inglés y los
            repuestos llegaban por barco. Hoy seguimos haciendo lo mismo:
            entender qué falla, repararlo bien, y dejarlo funcionando.
          </p>
          <p className={styles.body}>
            Dos ingenieros recibidos, especializados en lo que ofrecen.
            Trabajos pensados, no improvisados.
          </p>

          <div className={styles.statsRow}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
