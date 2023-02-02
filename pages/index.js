import Navbar from "@/components/layouts/Navbar";
import Features from "@/components/sections/Features";
import Helpers from "@/components/sections/Helpers";
import Hero from "@/components/sections/Hero";
import Innovation from "@/components/sections/Innovation";
import Partners from "@/components/sections/Partners";
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
    </div>
  );
};

export default Home;
