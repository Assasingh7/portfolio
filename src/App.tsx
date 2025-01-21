
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full p-8 bg-gray-100">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default App;
