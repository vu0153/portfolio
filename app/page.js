import CardSlider from "@/components/landing/CardSlider";
import LandingHero from "@/components/landing/LandingHero";
import ProjectsPreview from "@/components/landing/ProjectsPreview";
import PhotographyPreview from "@/components/landing/PhotographyPreview";
import AboutPreview from "@/components/landing/AboutPreview";
import ContactCTA from "@/components/landing/ContactCTA";

const labels = ["Home", "Technical Projects", "Photography", "About", "Get in touch"];

export default function Home() {
  return (
    <CardSlider labels={labels}>
      <LandingHero />
      <ProjectsPreview />
      <PhotographyPreview />
      <AboutPreview />
      <ContactCTA />
    </CardSlider>
  );
}
