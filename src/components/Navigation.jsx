import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.scss';

export function Navigation() {
  return (
    <>
      <nav style={{ 'margin-top': '100px' }}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
              home
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
              portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/cv" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
              cv
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
