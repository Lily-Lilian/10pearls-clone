import Navbar from "@/components/layouts/Navbar";
import Helpers from "@/components/sections/Helpers";
import Hero from "@/components/sections/Hero";
import Innovation from "@/components/sections/Innovation";
import Partners from "@/components/sections/Partners";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Helpers />
      <Innovation />
    </div>
  );
};

export default Home;
