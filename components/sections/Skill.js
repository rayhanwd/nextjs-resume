import React, { useEffect, useState } from 'react';

const Skill = ({data}) => {

  return (
    <section id="skill" className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-20 mx-auto">
        <div className="inline-block">
          <h1 className="font-medium title-font mb-2 text-white bg-slate-800 rounded-md px-3 py-2">
            Skill and Expertist
          </h1>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="md:w-1/2">
            <p className="my-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="md:W-1/2" data-aos="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-3">
              {data.map(({ id,name, ability }) => (
                <div key={id}>
                  <h6 className="uppercase my-2">{name}</h6>
                  <div style={{ "width": 300 + 'px' }} className="bg-slate-100 h-4 mb-6">
                    <div className="bg-slate-900 h-4" style={{ "width": ability + 'px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill