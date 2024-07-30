import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Services from './components/services/services';
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
