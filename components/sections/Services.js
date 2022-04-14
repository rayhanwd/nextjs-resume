import React, { useEffect, useState } from 'react';
import { MdEmail } from 'react-icons/md';

const Services = ({data}) => {
  const [filter, setName] = useState("frontend");

  let items = data.filter((item) => item.name === filter);
console.log(items)
  const tabs = [{ id: 1,title:"Frontend", name: "frontend", icon: <MdEmail className="text-lg" /> },
  { id: 1,title:"Backend", name: "backend", icon: <MdEmail className="text-lg" /> },
  { id: 2,title:"Database", name: "database", icon: <MdEmail className="text-lg" /> },
  { id: 3,title:"Frontend Design", name: "fdesign", icon: <MdEmail className="text-lg" /> },
  { id: 4,title:"Api Intrigration", name: "api", icon: <MdEmail className="text-lg" /> }]

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
              {tabs.map(({ id, icon, name, title }) => (
                <div onClick={() => setName(name)} key={id} className="flex items-center gap-x-2 bg-slate-100 rounded py-2 px-4">
                  {icon}
                  <span className="text-lg">
                    {title}
                  </span>
                </div>
              ))}
            </div>
            {
              items.map(({ id, icon, title, dec }) => (
                <div key={id} className="md:w-7/12 p-4">
                  <div className="flex rounded h-full bg-slate-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-slate-900 text-white flex-shrink-0">
                        {icon}
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">
                        {title}
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">{dec}</p>
                      <a className="mt-3 text-slate-500 inline-flex items-center">Learn More
                        {/* svg */}
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
