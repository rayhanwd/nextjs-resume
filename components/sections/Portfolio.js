import React from 'react';
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md';

const Portfolio = (props) => {
  console.log(props)
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
            <div className="flex bg-slate-100 rounded">
              <div className="px-8 py-10  w-1/2">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Ride sharing application</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <p className="leading-relaxed py-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
              <img alt="gallery" className="w-1/2" src="https://dummyimage.com/601x361" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}