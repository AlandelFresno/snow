import { Metadata } from 'next';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Services from '../components/services/services';

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Snow — servicios técnicos en aires acondicionados, grupos generadores y centrales telefónicas. 30+ años de experiencia en Argentina.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
