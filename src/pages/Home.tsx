import React from "react";
import WhatsAppBubble from "../components/WhatsappBubble";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      <WhatsAppBubble />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
