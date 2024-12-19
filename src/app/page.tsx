import AboutSection from "@/components/about";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HowSection from "@/components/how";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <HowSection />
      <Footer />
    </main>
  );
}
