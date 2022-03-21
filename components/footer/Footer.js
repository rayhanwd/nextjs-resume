import React from 'react';

const Footer = () => {
  return (
    <footer style={{"textAlign":"center"}}><p>{`Resume © ${new Date().getFullYear()}  Created by Kazi Rayhan`}</p></footer>
  )
}

export default Footer;