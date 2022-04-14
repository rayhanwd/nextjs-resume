import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../components/header/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Resume from '../components/sections/Resume';
import Skill from '../components/sections/Skill';
import Testimonial from '../components/sections/Testimonial';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import Footer from '../components/footer/Footer';
const Index = ({skills,service}) => {
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
      <Header />
      <main className="bg-slate-200">
        <Hero />
        <About />
        <Resume />
        <Skill data={skills}/>
        <Testimonial />
        <Portfolio />
        <Services data={service}/>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;

export async function getStaticProps() {

  const res = await fetch('https://www.rayhanjs.com/api/skill')
  const skills = await res.json()
  const res2 = await fetch('https://www.rayhanjs.com/api/service')
  const service = await res2.json()
  return {
    props: {
      skills,
      service
    },
  }
}