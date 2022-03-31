import React from "react";

const About = () => {
  return (
    <section id="about" className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-10 pb-20 mx-auto">
      <div className="inline-block">
          <h1 className="font-medium title-font mb-2 text-white bg-slate-800 rounded-md px-3 py-2">
            About
          </h1>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="lg:w-4/12" data-aos="fade-right">
            <img src="assets/img/profile-img.jpg" className="w-72" alt="" />
          </div>
          <div className="lg:w-8/12 pt-4 pt-lg-0" data-aos="fade-left">
            <h3>Javascript/Node Developer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 Octbor 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.rayhanjs.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+880 19 99287 4495</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dhaka, Bangladesh</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bsc in CSE</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>rayhanbd4400.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Open to job:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;