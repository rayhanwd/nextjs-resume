import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { BiHome, BiUser, BiFileBlank, BiFolder, BiServer, BiEnvelope } from 'react-icons/bi';

class Header extends Component {
  constructor() {
    super()
    this.state = { navItem: [{ id: 1, icon: <BiHome className="me-3 fs-2" />, to: "hero", name: "Home" }, { id: 2, icon: <BiUser className="me-3 fs-2" />, to: "about", name: "About" }, { id: 3, icon: <BiFileBlank className="me-3 fs-2" />, to: "resume", name: "Resume" }, { id: 4, icon: <BiFolder className="me-3 fs-2" />, to: "portfolio", name: "Portfolio" }, { id: 5, icon: <BiServer className="me-3 fs-2" />, to: "services", name: "Services" }, { id: 5, icon: <BiEnvelope className="me-3 fs-2" />, to: "contact", name: "Contact" }] }
  }
  render() {
    return (
      <aside className="bg-slate-800">
        <nav className="mt-6 px-3">
          {this.state.navItem.map(item =>
            <li className="list-none nav_link my-5 text-lg cursor-pointer text-slate-200" key={item.id}>
              <Link to={item.to} activeClass="text-slate-100"
                spy={true}
                smooth={true}
                duration={200}>
                <span className="flex items-center gap-x-3">
                 <span className="rotate-90">{item.icon}</span> 
                  {item.name}
                </span>
              </Link>
            </li>
          )}
        </nav>
      </aside>
    );
  }
}

export default Header;

