import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/layout.scss';

export function Navigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link-active' : 'link')}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'link-active' : 'link')}
          >
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cv"
            className={({ isActive }) => (isActive ? 'link-active' : 'link')}
          >
            CV
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'link-active' : 'link')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}
