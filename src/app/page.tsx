import AboutSection from "@/components/about";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
