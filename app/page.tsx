import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import BrandMarquee from "@/components/ui/BrandMarquee";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BrandMarquee />
      <div className="flex justify-center items-center h-screen">
        <Button>Get Started</Button>
      </div>
    </>
  );
}
