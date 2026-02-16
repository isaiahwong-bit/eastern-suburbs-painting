import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
