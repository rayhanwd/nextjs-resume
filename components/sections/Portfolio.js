import React from 'react';
import { MdEmail } from 'react-icons/md';

const Portfolio = (props) => {

  return (
    <section id="portfolio" className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="inline-block">
          <h1 className="font-medium title-font mb-2 text-white bg-slate-800 rounded-md px-3 py-2">
            Portfolio
          </h1>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="md:w-5/12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Frontend
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Backend
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Database
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Native
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Native
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Native
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Native
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                <MdEmail className="text-lg" />
                <span className="text-lg">
                  Native
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-7/12 p-4">
            <img alt="gallery" className="w-full h-full" src="assets/img/hostel_app/account.PNG" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;