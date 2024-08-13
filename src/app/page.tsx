import { Metadata } from 'next';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Services from './components/services/services';

export const metadata: Metadata = {
  title: 'Snow',
  description: 'Servicios a tu disposición',
};

export default function Home() {
  return (
    <main id="main">
      <Header />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
