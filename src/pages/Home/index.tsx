import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className={'list-group-item'} to={'message'}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink className={'list-group-item'} to={'user'}>
              User
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
