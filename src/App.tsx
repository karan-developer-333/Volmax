/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeatureStrip from './components/FeatureStrip';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import Noise from './components/Noise';
import ScrollProgress from './components/ScrollProgress';
import About from './sections/About';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import Policy from './sections/Policy';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <PageLoader />
        <CustomCursor />
        <Noise />
        <ScrollProgress />
        <main className="min-h-screen bg-bg text-current selection:bg-accent selection:text-white overflow-x-hidden">
          <Navbar />
          <Hero />
          <FeatureStrip />
          <About />
          <Pricing />
          <Policy />
          <Contact />
          
          <footer className="py-12 border-t border-white/5 text-center">
            <div className="container mx-auto px-6">
              <div className="text-2xl font-display font-bold tracking-tighter mb-4">
                VOLMAX<span className="text-accent">.</span>
              </div>
              <p className="text-text-muted text-xs uppercase tracking-widest">
                © 2026 Volmax Web. All rights reserved. Pali, Rajasthan.
              </p>
            </div>
          </footer>
        </main>
      </SmoothScroll>
    </ThemeProvider>
  );
}
