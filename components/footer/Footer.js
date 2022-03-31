import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter, FaHandPointDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center bg-slate-900 pb-5 text-slate-100">
        <div className="flex items-center justify-center gap-x-5">
          <a className="my-7" href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl"/>
          </a>
          <a className='my-7' href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='text-xl'/>
          </a>
          <a className='my-7' href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='text-xl'/>
          </a>
          <a className='my-7' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='text-2xl'/>
          </a>
        </div>
      <p>
        {`Resume © ${new Date().getFullYear()}  Created by Kazi Rayhan`}
      </p>
    </footer>
  )
}

export default Footer;