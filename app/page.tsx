import AnimateCard from "@/components/Card";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/how-it-works";
import OneSolution from "@/components/one-solution";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Hero />
      <AnimateCard />
      <HowItWorks />
      <Features />
      <OneSolution />
      <Footer />
    </div>
  );
}
