import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="inline-block">
          <h1 className="font-medium title-font mb-2 text-white bg-slate-800 rounded-md px-3 py-2">
            Resume
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="md:w-1/2" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Kazi Rayhan</h4>
              <p><em>I am a professional front-end web developer. I specialize in React and Next js! {`–`} not just as a library or framework but as powerful frontend UI and client-side and server-side rendering tools.</em></p>
              <ul>
                <li>Mirpur-2,Dhaka Bangladesh</li>
                <li>(+88) 199-287-4495</li>
                <li>rayhanbd4400@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bsc of CSE software Eng.</h4>
              <h5>2022 - 2025</h5>
              <p><em>Bangladesh University of Business and Technology, Rupnagar, Mirpur-2,Bangladesh</em></p>
            </div>
            <div className="resume-item">
              <h4>Deploma of Computer Technology</h4>
              <h5>2016 - 2020</h5>
              <p><em>Magura Polythenic Institute , Magura</em></p>
            </div>
          </div>
          <div className="md:w-1/2 my-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Frontend developer</h4>
              <h5>2020 - 2020</h5>
              <p><em>, New York, NY </em></p>
              <ul>
                <li>Frontend Ui design</li>
                <li>Frontend development</li>
                <li>Frontend hosting</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Frontend developer</h4>
              <h5>2017 - 2018</h5>
              <p><em>Sindabad IT, Mirpur-2, Dhaka</em></p>
              <ul>
                <li>Frontend Ui design</li>
                <li>Frontend development</li>
                <li>Frontend hosting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;