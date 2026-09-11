import LandingHero from "@/components/landing/LandingHero";
import IntroStatement from "@/components/landing/IntroStatement";
import ProjectsPreview from "@/components/landing/ProjectsPreview";
import PhotographyPreview from "@/components/landing/PhotographyPreview";
import ResumePreview from "@/components/landing/ResumePreview";
import ContactCTA from "@/components/landing/ContactCTA";

export default function Home() {
  return (
    <>
      <LandingHero />
      <IntroStatement />
      <ProjectsPreview />
      <PhotographyPreview />
      <ResumePreview />
      <ContactCTA />
    </>
  );
}
