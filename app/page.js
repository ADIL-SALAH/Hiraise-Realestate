import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Carousal from "./components/Carousal";
import WhoWeAre from "./components/WhoWeAre";
import PropertyList from "./components/PropertyList";
import OurServices from "./components/OurServices";
import Neighbour from "./components/Neighbour";
import OurTeam from "./components/OurTeam";
import Trendings from "./components/Trendings";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <WhoWeAre />
      <PropertyList />
      <OurServices />
      {/* <Neighbour /> */}
      <OurTeam />
      <Trendings />
      <Testimonials />
      <Footer />
    </main>
  );
}
