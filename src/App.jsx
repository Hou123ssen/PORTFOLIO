import { Navbar } from './components/layout/Navbar.jsx';
import { Hero } from './sections/hero/Hero.jsx';
import { TechStrip } from './sections/hero/TechStrip.jsx';
import { SelectedWork } from './sections/projects/SelectedWork.jsx';
import { About } from './sections/about/About.jsx';
import { Services } from './sections/services/Services.jsx';
import { Contact } from './sections/contact/Contact.jsx';
import { useSmoothScroll } from './hooks/useSmoothScroll.js';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <SelectedWork />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
