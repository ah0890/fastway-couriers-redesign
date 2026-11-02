import AboutSection from "@/components/AboutSection";
import DepotFinder from "@/components/DepotFinder";
import Footer from "@/components/Footer";
import FranchiseSection from "@/components/FranchiseSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import QuickLinks from "@/components/QuickLinks";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <QuickLinks />
        <AboutSection />
        <DepotFinder />
        <FranchiseSection />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
