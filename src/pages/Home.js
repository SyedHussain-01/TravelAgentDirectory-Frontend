import React,{ useEffect } from "react";
import {
  ScrollToTop,
  Footer,
  Hero,
  Navbar,
  Services,
  Testimonials,
} from "../components/landing_page";
import Recommend from "../components/assets/Recommend"
import ScrollReveal from "scrollreveal";

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend/ >
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
