import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { BiHome, BiUser, BiFileBlank, BiFolder, BiServer, BiEnvelope } from 'react-icons/bi';
import { BsTwitter,BsFacebook,BsSkype,BsLinkedin } from 'react-icons/bs';
import { CgInstagram } from 'react-icons/cg';

class Header extends Component {
  constructor() {
    super()
    this.state = { navItem: [{ id: 1, icon: <BiHome className="me-3 fs-5" />, to: "hero", name: "Home" }, { id: 2, icon: <BiUser className="me-3 fs-5" />, to: "about", name: "About" }, { id: 3, icon: <BiFileBlank className="me-3 fs-5" />, to: "resume", name: "Resume" }, { id: 4, icon: <BiFolder className="me-3 fs-5" />, to: "portfolio", name: "Portfolio" }, { id: 5, icon: <BiServer className="me-3 fs-5" />, to: "services", name: "Services" }, { id: 5, icon: <BiEnvelope className="me-3 fs-5" />, to: "contact", name: "Contact" }] }
  }
  render() {
    return (
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><Link href="/"><a>Kazi Rayhan</a></Link></h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter"><BsTwitter/></a>
              <a href="#" className="facebook"><BsFacebook/></a>
              <a href="#" className="instagram"><CgInstagram/></a>
              <a href="#" className="google-plus"><BsSkype/></a>
              <a href="#" className="linkedin"><BsLinkedin/></a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              {this.state.navItem.map(item =>
                <li key={item.id} className="nav-link">
                  <Link to={item.to} activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={200}>
                    {item.icon}{item.name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;