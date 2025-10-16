import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex justify-center items-center h-screen">
        <Button>Get Started</Button>
      </div>
    </>
  );
}
