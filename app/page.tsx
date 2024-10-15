import Appbar from "@/components/AppBar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Appbar />
      <HeroSection />
    </main>
  );
}
