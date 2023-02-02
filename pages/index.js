import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Awards from "@/components/sections/Awards";
import Features from "@/components/sections/Features";
import Helpers from "@/components/sections/Helpers";
import Hero from "@/components/sections/Hero";
import Innovation from "@/components/sections/Innovation";
import Partners from "@/components/sections/Partners";
import Ready from "@/components/sections/Ready";
import Platform from "./../components/sections/Platform";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Helpers />
      <Innovation />
      <Features />
      <Platform />
      <Awards />
      <Ready />
      <Footer />
    </div>
  );
};

export default Home;
