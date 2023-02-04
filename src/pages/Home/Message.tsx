import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Message() {
  return (
    <div>
      <ul>
        <li>
          <Link to="detailParams/1/params"> Params</Link>
        </li>
        <li>
          <Link to="detailSearch?id=2&content=search"> Search</Link>
        </li>
        <li>
          <Link to="detailState" state={{ id: 3, content: 'state' }}>
            State
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
