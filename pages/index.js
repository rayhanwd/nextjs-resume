import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Resume from '../components/sections/Resume';
import Facts from '../components/sections/Facts';
import Skill from '../components/sections/Skill';
import Testimonial from '../components/sections/Testimonial';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import Footer from '../components/footer/Footer';
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  const handleClick = () => {
    document.body.classList.toggle('mobile-nav-active');
  }
  useEffect(() => {
    window.addEventListener('resize', () => {
      document.body.classList.remove('mobile-nav-active');
    });
  }, []);
  return (
    <>
      <div onClick={() => handleClick()} className="mobile-nav-toggle d-xl-none">
        <FaBars />
      </div>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Skill />
        <Resume />
        <Facts />
        <Portfolio />
        <Testimonial />
        <Services />
        <Contact />
        <Footer />
      </main>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
};

export default Index;
