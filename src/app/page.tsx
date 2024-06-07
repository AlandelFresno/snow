import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Services from './components/services/services';

export default function Home() {
  return (
    <main className="">
      <Header />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
