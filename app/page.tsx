import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import BrandMarquee from "@/components/ui/BrandMarquee";
import About from "@/components/AboutBro";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BrandMarquee />
      <About />
      <Portfolio />
      <div className="flex justify-center items-center h-screen">
        <Button>Get Started</Button>
      </div>
    </>
  );
}
