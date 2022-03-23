import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center bg-slate-900 pb-5 text-slate-100"><p>{`Resume © ${new Date().getFullYear()}  Created by Kazi Rayhan`}</p></footer>
  )
}

export default Footer;