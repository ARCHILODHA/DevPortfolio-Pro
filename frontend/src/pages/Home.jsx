import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import SkillsPreview from "../components/home/SkillsPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ContactCTA from "../components/home/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}

export default Home;