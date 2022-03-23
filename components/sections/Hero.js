import React from "react";
import TypeAnimation from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-column justify-center items-center">
      <div className="hero-container" data-aos="fade-in">
        <h4 className="uppercase text-4xl">Kazi Rayhan</h4>
        <p className="uppercase no-underline">{`I'M`} <TypeAnimation
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