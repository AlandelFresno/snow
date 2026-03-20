import React from 'react';
import styles from './pages.module.scss';

const Services = () => {
  return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>Servicios Profesionales</div>
        <h1 className={styles.heroTitle}>Lo que ofrecemos</h1>
        <p className={styles.heroSubtitle}>
          Soluciones técnicas especializadas con más de 30 años de experiencia
        </p>
        <div className={styles.heroNav}>
          <a href="#aires" className={styles.heroNavLink}>❄ Aires Acondicionados</a>
          <a href="#generadores" className={styles.heroNavLink}>⚡ Grupos Generadores</a>
          <a href="#telecom" className={styles.heroNavLink}>☎ Centrales Telefónicas</a>
        </div>
      </section>

      {/* SECTION 1: AIRES ACONDICIONADOS */}
      <section id="aires" className={styles.serviceSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>❄</span>
          <div>
            <h2 className={styles.sectionTitle}>Aires Acondicionados</h2>
            <p className={styles.sectionSubtitle}>Mantenimiento, reparación e instalación</p>
          </div>
        </div>
        <div className={styles.cardsGrid}>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Compresores</h4>
            <ul className={styles.cardList}>
              <li>Presión de alta</li>
              <li>Presión de baja</li>
              <li>Amperaje</li>
              <li>Borneras</li>
              <li>Regulación de presostatos</li>
              <li>Regulación de térmicos</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Tableros Eléctricos</h4>
            <ul className={styles.cardList}>
              <li>Inspección general y limpieza</li>
              <li>Control de enclavamientos</li>
              <li>Ajuste de borneras</li>
              <li>Limpieza de contactos</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Bandeja de Condensado</h4>
            <ul className={styles.cardList}>
              <li>Limpieza de bandeja</li>
              <li>Limpieza de desagote</li>
            </ul>
          </div>

          <div className={`${styles.serviceCard} ${styles.serviceCardSplit}`}>
            <div className={styles.splitHalf}>
              <h4 className={styles.cardTitle}>Refrigerante</h4>
              <ul className={styles.cardList}>
                <li>Control de carga</li>
              </ul>
            </div>
            <div className={styles.splitDivider}></div>
            <div className={styles.splitHalf}>
              <h4 className={styles.cardTitle}>Ventiladores</h4>
              <ul className={styles.cardList}>
                <li>Correas</li>
                <li>Amperaje</li>
                <li>Borneras</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.serviceCard} ${styles.serviceCardSplit}`}>
            <div className={styles.splitHalf}>
              <h4 className={styles.cardTitle}>Serpentinas</h4>
              <ul className={styles.cardList}>
                <li>Limpieza exterior</li>
              </ul>
            </div>
            <div className={styles.splitDivider}></div>
            <div className={styles.splitHalf}>
              <h4 className={styles.cardTitle}>Filtros de Aire</h4>
              <ul className={styles.cardList}>
                <li>Inspección y limpieza</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: GRUPOS GENERADORES */}
      <section id="generadores" className={styles.serviceSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>⚡</span>
          <div>
            <h2 className={styles.sectionTitle}>Grupos Generadores</h2>
            <p className={styles.sectionSubtitle}>Mantenimiento, reparación e instalación</p>
          </div>
        </div>
        <div className={styles.cardsGrid}>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Motor Diesel</h4>
            <ul className={styles.cardList}>
              <li>Inspección general</li>
              <li>Cambio de aceite y filtros</li>
              <li>Sistema de refrigeración</li>
              <li>Sistema de combustible</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Alternador</h4>
            <ul className={styles.cardList}>
              <li>Inspección de devanados</li>
              <li>Medición de voltaje</li>
              <li>Control de aislación</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Tablero de Control</h4>
            <ul className={styles.cardList}>
              <li>Inspección eléctrica</li>
              <li>Calibración de parámetros</li>
              <li>Sistema de arranque</li>
              <li>Baterías y cargador</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 3: CENTRALES TELEFÓNICAS */}
      <section id="telecom" className={styles.serviceSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>☎</span>
          <div>
            <h2 className={styles.sectionTitle}>Centrales Telefónicas</h2>
            <p className={styles.sectionSubtitle}>Mantenimiento de centrales públicas TDM e IP</p>
          </div>
        </div>
        <div className={styles.cardsGrid}>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Sistemas TDM</h4>
            <ul className={styles.cardList}>
              <li>Mantenimiento preventivo</li>
              <li>Diagnóstico de fallas</li>
              <li>Reemplazo de componentes</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Sistemas IP</h4>
            <ul className={styles.cardList}>
              <li>Configuración de equipos</li>
              <li>Diagnóstico de red</li>
              <li>Actualización de firmware</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h4 className={styles.cardTitle}>Infraestructura</h4>
            <ul className={styles.cardList}>
              <li>Cableado estructurado</li>
              <li>Gestión de conectividad</li>
              <li>Documentación técnica</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;
