import React from "react";
import TypeAnimation from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Kazi Rayhan</h1>
        <p>Im <TypeAnimation
          cursor={false}
          sequence={['Web Developer', 1000, 'App Developer']}
          wrapper="span"
          className="typed"
        /></p>
      </div>
    </section>
  )
}

export default Hero;