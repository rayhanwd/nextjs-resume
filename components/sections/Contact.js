import React from "react";
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md';
const Contact = () => {
  return (
    <section id="contact" className="text-slate-600 body-font relative bg-slate-900">
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 rounded-lg overflow-hidden sm:mr-10 py-10 flex items-end justify-start relative">
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3650.1293692967242!2d90.35419331434973!3d23.813998292262085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3755c121d14bb935%3A0xc31f43658c5c9598!2s13%20Rupnagar%20Road%2C%20Dhaka!3m2!1d23.813993399999998!2d90.356382!4m0!5e0!3m2!1sen!2sbd!4v1647664513488!5m2!1sen!2sbd" frameBorder="0" style={{ "border": "0", "width": 100 + "%", "height": 290 + "px" }} allowFullScreen></iframe>
        </div>
        <div className="md:w-1/2 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0">
            <p className="text-xl text-slate-200 text-center">
            Message Box
            </p>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-slate-300 text-slate-500 shadow-sm text-sm">
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                      </path>
                    </svg>
                  </span>
                  <input type="text" id="design-login-email" className=" flex-1 appearance-none border border-slate-300 w-full py-2 px-4 bg-white text-slate-700 placeholder-slate-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent" placeholder="Email" />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-slate-300 text-slate-500 shadow-sm text-sm">
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                      </path>
                    </svg>
                  </span>
                  <input type="password" id="design-login-password" className=" flex-1 appearance-none border border-slate-300 w-full py-2 px-4 bg-white text-slate-700 placeholder-slate-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent" placeholder="Password" />
                </div>
              </div>
              <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-slate-800 shadow-md hover:text-slate-800 hover:bg-white focus:outline-none focus:ring-2">
                <span className="w-full">
                  Submit
                </span>
              </button>
            </form>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Contact;