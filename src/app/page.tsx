import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Services from './components/services/Services';
import SEO from './seo';

export default function Home() {
  return (
    <main id="main">
      <SEO pageTitle="Snow" PageDescription="Servicios a tu disposición" />
      <Header />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
