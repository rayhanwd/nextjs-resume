import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { BiHome, BiUser, BiFileBlank, BiFolder, BiServer, BiEnvelope } from 'react-icons/bi';

class Header extends Component {
  constructor() {
    super()
    this.state = { navItem: [{ id: 1, icon: <BiHome className="me-3 text-md" />, to: "hero", name: "Home" }, { id: 2, icon: <BiUser className="me-3 text-md" />, to: "about", name: "About" }, { id: 3, icon: <BiFileBlank className="me-3 text-md" />, to: "resume", name: "Resume" }, { id: 4, icon: <BiFolder className="me-3 text-md" />, to: "portfolio", name: "Portfolio" }, { id: 5, icon: <BiServer className="me-3 text-md" />, to: "services", name: "Services" }, { id: 5, icon: <BiEnvelope className="me-3 text-md" />, to: "contact", name: "Contact" }] }
  }
  render() {
    return (
      <aside className="bg-slate-800 border-r-2 border-blue-400">
        <nav className="flex items-center justify-around flex-col h-full">
          {this.state.navItem.map(item =>
            <div className="list-none  nav_link text-md cursor-pointer text-slate-200" key={item.id}>
              <Link to={item.to} activeClass="text-slate-100 text-blue-400"
                spy={true}
                smooth={true}
                duration={200}>
                <div className="flex items-center">
                 <span className="rotate-90">
                   {item.icon}
                 </span> 
                 <span className="pt-2">
                 {item.name}
                 </span>
                </div>
              </Link>
            </div>
          )}
        </nav>
      </aside>
    );
  }
}

export default Header;

