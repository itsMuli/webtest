import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import mbewasoaps from '../Assets/mbewasoaps.png';
import '../../index.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <img src={mbewasoaps} alt='Logo' className='logo-image' />
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink to='/facebook' className='nav-link'>
                <FaFacebookF />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/tiktok' className='nav-link'>
                <FaTiktok />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/instagram' className='nav-link'>
                <FaInstagram />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/register' className='nav-link'>
                Register
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
