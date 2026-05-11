import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Equipment from './components/Equipment';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <>
      {/* Navegação fixa no topo */}
      <Header />

      {/* Página principal — conteúdo em ordem de seção */}
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Equipment />
        <Differentials />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão flutuante do WhatsApp — sempre visível */}
      <WhatsAppFloat />
    </>
  );
}

export default App;

