import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactCta } from './components/sections/ContactCta';
import { ChatWidget } from './components/chatbot/ChatWidget';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactCta />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
