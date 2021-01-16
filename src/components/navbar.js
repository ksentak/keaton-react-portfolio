import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  const [menu, setAsOpen] = useState(false);

  const toggleNav = () => {
    setAsOpen(!menu);
  };

  const show = menu ? 'show' : '';

  return (
    <div className='Navbar'>
      <nav className='navbar navbar-expand-sm'>
        <div className='container'>
          <button
            className='navbar-toggler ml-auto'
            type='button'
            aria-controls='navbarMobile'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={toggleNav}
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className={'collapse navbar-collapse ' + show} id='navbarMobile'>
            <ul id='menu-primary' className='navbar-nav ml-auto'>
              {/* Home */}
              <li onClick={toggleNav}>
                <Link exact to='/' activeClassName='active' className='nav-Link'>
                  Home
                </Link>
              </li>
              {/* About */}
              <li onClick={toggleNav}>
                <Link exact to='/about' activeClassName='active' className='nav-Link'>
                  About
                </Link>
              </li>
              {/* Portfolio */}
              <li onClick={toggleNav}>
                <Link exact to='/portfolio' activeClassName='active' className='nav-Link'>
                  Portfolio
                </Link>
              </li>
              {/* Contact */}
              <li onClick={toggleNav}>
                <Link exact to='/contact' activeClassName='active' className='nav-Link'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
