import Link from 'next/link';
import Image from 'next/image';
import styles from './services.module.scss';

type Card = {
  number: string;
  title: string;
  tagline: string;
  image: string;
};

const SERVICES: Card[] = [
  {
    number: '01',
    title: 'Aires Acondicionados',
    tagline: 'Climatización industrial y comercial',
    // TEMPORARY: stock placeholder hasta foto IRL real (ref: campusnorte.unc.edu.ar)
    image: '/assets/images/IRL/Aires_Acondicionados_TEMP.jpg',
  },
  {
    number: '02',
    title: 'Grupos Generadores',
    tagline: 'Backup energético crítico',
    image: '/assets/images/IRL/Grupos_Generadores.jpg',
  },
  {
    number: '03',
    title: 'Centrales Telefónicas',
    tagline: 'Telefonía empresarial TDM e IP',
    image: '/assets/images/IRL/Centrales_Telefonicas.jpg',
  },
];

const Services = () => {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <span id="about" className={styles.anchor} />

      <div className={styles.headingBlock}>
        <span className={styles.eyebrow}>Servicios</span>
        <h2 id="services-heading" className={styles.heading}>
          Tres especialidades. <br />
          <em>Treinta años de oficio.</em>
        </h2>
        <p className={styles.lede}>
          Mantenimiento, reparación e instalación. Sobre el equipo, no sobre el manual.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <Link key={s.number} href={`/servicios#s${s.number}`} className={styles.card}>
            <div className={styles.cardMedia}>
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className={styles.cardImg}
              />
              <div className={styles.cardOverlay} />
              <span className={styles.cardNumber}>{s.number}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardTagline}>{s.tagline}</p>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.ctaRow}>
        <Link href="/servicios" className={styles.ctaLink}>
          Ver servicios completos
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Services;
