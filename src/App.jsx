import { useCallback, useState } from 'react';

import { PageLoader } from './components/PageLoader.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { CustomCursor } from './components/ui/CustomCursor.jsx';
import { Hero } from './sections/hero/Hero.jsx';
import { TechStrip } from './sections/hero/TechStrip.jsx';
import { SelectedWork } from './sections/projects/SelectedWork.jsx';
import { About } from './sections/about/About.jsx';
import { Services } from './sections/services/Services.jsx';
import { Contact } from './sections/contact/Contact.jsx';
import { useSmoothScroll } from './hooks/useSmoothScroll.js';

export default function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const handleLoaderComplete = useCallback(() => setLoaderComplete(true), []);

  useSmoothScroll();

  return (
    <>
      {!loaderComplete && <PageLoader onComplete={handleLoaderComplete} />}
      <CustomCursor />
      <Navbar />
      <main>
        <Hero canAnimate={loaderComplete} />
        <TechStrip />
        <SelectedWork />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
