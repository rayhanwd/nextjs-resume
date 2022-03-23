import React from 'react';
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md';

const Services = () => {

  return (
    <section id="services" className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-20 mx-auto">
        <div className="inline-block">
          <h1 className="font-medium title-font mb-2 text-white bg-slate-800 rounded-md px-3 py-2">
            Services
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
            <div className="flex rounded h-full bg-slate-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-slate-900 text-white flex-shrink-0">
                  {/* icon */}
                  <MdEmail />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Shooting Stars
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-slate-500 inline-flex items-center">Learn More
                  {/* svg */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;

export async function getStaticProps() {
  const res = await fetch(`../../pages/api/service.json`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { props: data }
}