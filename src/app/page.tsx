import { Metadata } from 'next';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Services from '../components/services/services';

export const metadata: Metadata = {
  title: 'Snow',
  description: 'Servicios a tu disposición',
};

export default function Home() {
  return (
    <main id="main">
      <Services />
      <About />
      <Contact />
    </main>
  );
}
