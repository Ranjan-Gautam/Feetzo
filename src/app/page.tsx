import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collections from "@/components/Collections";
import Spotlight from "@/components/Spotlight";
import ProductGrid from "@/components/ProductGrid";
import HowToOrder from "@/components/HowToOrder";
import Story from "@/components/Story";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Collections />
        <Spotlight />
        <ProductGrid />
        <HowToOrder />
        <Story />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
