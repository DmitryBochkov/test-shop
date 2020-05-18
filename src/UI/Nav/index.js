import React from 'react';
import { Link } from "react-router-dom";

import './index.css';

export const MainNav = () => {
  return (
    <nav>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}