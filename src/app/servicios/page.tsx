import Image from 'next/image';
import { Metadata } from 'next';
import styles from './pages.module.scss';

export const metadata: Metadata = {
  title: 'Servicios — Snow',
  description:
    'Mantenimiento, reparación e instalación de aires acondicionados, grupos generadores y centrales telefónicas. 30+ años de experiencia técnica.',
};

// TODO papá: confirmar mapeo foto → servicio. Por ahora asignacion tentativa.
const HERO_PHOTO = '/assets/images/IRL/IMG-20241001-WA0015.jpg';
const SECTION_PHOTOS = {
  aires: '/assets/images/IRL/IMG-20241001-WA0017.jpg',
  generadores: '/assets/images/IRL/IMG-20241001-WA0025.jpg',
  telecom: '/assets/images/IRL/IMG-20241001-WA0035.jpg',
};

// Galeria solo fotos IRL reales. demo1/demo2 son ilustraciones de referencia, NO van aqui.
// WA0029 y WA0031 no existen en disco (renombrados a demos).
const GALLERY_PHOTOS = [
  'WA0016', 'WA0018', 'WA0019', 'WA0020', 'WA0021', 'WA0022', 'WA0023',
  'WA0024', 'WA0026', 'WA0027', 'WA0028', 'WA0030', 'WA0032', 'WA0033',
  'WA0034', 'WA0036', 'WA0037', 'WA0038', 'WA0039', 'WA0040', 'WA0041',
  'WA0042', 'WA0043',
].map((id) => `/assets/images/IRL/IMG-20241001-${id}.jpg`);

type ServiceBlock = {
  number: string;
  title: string;
  tagline: string;
  intro: string;
  image: string;
  imageAlt: string;
  cards: { title: string; items: string[] }[];
};

const SERVICES: ServiceBlock[] = [
  {
    number: '01',
    title: 'Aires Acondicionados',
    tagline: 'Climatización industrial y comercial',
    intro:
      'Mantenimiento preventivo y correctivo sobre equipos split, centrales y de techo. Trabajamos sobre compresores, tableros, líneas de refrigerante y todo el sistema de impulsión.',
    image: SECTION_PHOTOS.aires,
    imageAlt: 'Trabajo técnico sobre aire acondicionado',
    cards: [
      {
        title: 'Compresores',
        items: [
          'Presión de alta',
          'Presión de baja',
          'Amperaje',
          'Borneras',
          'Regulación de presostatos',
          'Regulación de térmicos',
        ],
      },
      {
        title: 'Tableros eléctricos',
        items: [
          'Inspección general y limpieza',
          'Control de enclavamientos',
          'Ajuste de borneras',
          'Limpieza de contactos',
        ],
      },
      {
        title: 'Bandeja de condensado',
        items: ['Limpieza de bandeja', 'Limpieza de desagote'],
      },
      {
        title: 'Refrigerante',
        items: ['Control de carga'],
      },
      {
        title: 'Ventiladores',
        items: ['Correas', 'Amperaje', 'Borneras'],
      },
      {
        title: 'Serpentinas y filtros',
        items: ['Limpieza exterior de serpentinas', 'Inspección y limpieza de filtros'],
      },
    ],
  },
  {
    number: '02',
    title: 'Grupos Generadores',
    tagline: 'Backup energético crítico',
    intro:
      'Instalación, puesta a punto y mantenimiento de grupos electrógenos diesel. Trabajo sobre motor, alternador y tableros de transferencia automática.',
    image: SECTION_PHOTOS.generadores,
    imageAlt: 'Mantenimiento de grupo generador diesel',
    cards: [
      {
        title: 'Motor diesel',
        items: [
          'Inspección general',
          'Cambio de aceite y filtros',
          'Sistema de refrigeración',
          'Sistema de combustible',
        ],
      },
      {
        title: 'Alternador',
        items: ['Inspección de devanados', 'Medición de voltaje', 'Control de aislación'],
      },
      {
        title: 'Tablero de control',
        items: [
          'Inspección eléctrica',
          'Calibración de parámetros',
          'Sistema de arranque',
          'Baterías y cargador',
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Centrales Telefónicas',
    tagline: 'Telefonía empresarial TDM e IP',
    intro:
      'Mantenimiento de centrales públicas y privadas, migración a IP, configuración de equipos y diagnóstico de redes telefónicas corporativas.',
    image: SECTION_PHOTOS.telecom,
    imageAlt: 'Trabajo sobre central telefónica',
    cards: [
      {
        title: 'Sistemas TDM',
        items: ['Mantenimiento preventivo', 'Diagnóstico de fallas', 'Reemplazo de componentes'],
      },
      {
        title: 'Sistemas IP',
        items: ['Configuración de equipos', 'Diagnóstico de red', 'Actualización de firmware'],
      },
      {
        title: 'Infraestructura',
        items: [
          'Cableado estructurado',
          'Gestión de conectividad',
          'Documentación técnica',
        ],
      },
    ],
  },
];

const Services = () => {
  return (
    <div className={styles.page}>
      {/* HERO con foto IRL */}
      <header className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <Image
            src={HERO_PHOTO}
            alt="Equipo Snow trabajando en campo"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Snow · Servicios técnicos</span>
          <h1 className={styles.heroTitle}>
            Lo que hacemos
            <span className={styles.heroAccent}>en campo</span>
          </h1>
          <p className={styles.heroLede}>
            Tres décadas resolviendo lo que el manual no contempla. Climatización,
            generación eléctrica y telefonía empresarial — con la cabeza adentro del equipo.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <strong>30+</strong>
              <span>años en el oficio</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>3</strong>
              <span>especialidades técnicas</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>24/7</strong>
              <span>respuesta en emergencias</span>
            </div>
          </div>
          <nav className={styles.heroNav} aria-label="Servicios">
            {SERVICES.map((s) => (
              <a key={s.number} href={`#s${s.number}`} className={styles.heroNavLink}>
                <span>{s.number}</span> {s.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* SECCIONES NUMERADAS */}
      <main className={styles.body}>
        {SERVICES.map((service, idx) => (
          <section
            key={service.number}
            id={`s${service.number}`}
            className={`${styles.serviceSection} ${idx % 2 === 1 ? styles.reversed : ''}`}
          >
            <div className={styles.serviceMedia}>
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.serviceImage}
              />
              <span className={styles.serviceNumber} aria-hidden="true">
                {service.number}
              </span>
            </div>
            <div className={styles.serviceContent}>
              <span className={styles.sectionEyebrow}>
                {service.number} — {service.tagline}
              </span>
              <h2 className={styles.sectionTitle}>{service.title}</h2>
              <p className={styles.sectionIntro}>{service.intro}</p>
              <ul className={styles.cardsGrid}>
                {service.cards.map((card) => (
                  <li key={card.title} className={styles.serviceCard}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <ul className={styles.cardList}>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* GALERIA TRABAJOS EN CAMPO */}
        <section className={styles.gallery} aria-labelledby="gallery-title">
          <header className={styles.galleryHeader}>
            <span className={styles.galleryEyebrow}>Archivo</span>
            <h2 id="gallery-title" className={styles.galleryTitle}>
              Trabajos en campo
            </h2>
            <p className={styles.galleryLede}>
              Documentación real de intervenciones recientes. Sin escenografía.
            </p>
          </header>
          <div className={styles.galleryGrid}>
            {GALLERY_PHOTOS.map((src, i) => (
              <figure key={src} className={styles.galleryItem}>
                <Image
                  src={src}
                  alt={`Trabajo técnico en campo ${i + 1}`}
                  width={600}
                  height={800}
                  sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className={styles.galleryImg}
                />
              </figure>
            ))}
          </div>
        </section>

        {/* CTA cierre */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>¿Necesitás un servicio?</span>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Hablemos del trabajo
            </h2>
            <p className={styles.ctaLede}>
              Diagnóstico, presupuesto o emergencia. Respondemos en el día.
            </p>
            <div className={styles.ctaActions}>
              <a href="/#contact" className={styles.ctaPrimary}>
                Contactar
              </a>
              <a href="/" className={styles.ctaSecondary}>
                Volver al inicio
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
