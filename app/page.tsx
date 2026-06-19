import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { Skills } from "@/components/skills";
import { BeyondTheDayJob } from "@/components/beyond-the-day-job";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <BeyondTheDayJob />
      <Contact />
      <Footer />
    </main>
  );
}
