import LandingHero from "@/components/landing/LandingHero";
import IntroStatement from "@/components/landing/IntroStatement";
import ProjectsPreview from "@/components/landing/ProjectsPreview";
import PhotographyPreview from "@/components/landing/PhotographyPreview";
import ContactCTA from "@/components/landing/ContactCTA";

export default function Home() {
  return (
    <>
      <LandingHero />
      <IntroStatement />
      <ProjectsPreview />
      <PhotographyPreview />
      <ContactCTA />
    </>
  );
}
