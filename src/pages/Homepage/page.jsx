import Header from "@/components/Layout/Header";
import React from "react";
import TrustedTeams from "./sections/TrustedTeams";
import WhyChooseUs from "./sections/WhyChooseUs";
import OurExpertise from "./sections/OurExpertise";
import Footer from "@/components/Layout/Footer";
import ProductWork from "./sections/ProductWork";
import AboutProduct from "./sections/AboutProduct";

const Homepage = () => {
  return (
    <div>
      <Header />
      <TrustedTeams />
      <AboutProduct />
      <WhyChooseUs />
      <OurExpertise />
      <ProductWork />
      <Footer />
    </div>
  );
};

export default Homepage;
