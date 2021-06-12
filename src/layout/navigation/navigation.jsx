import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <nav>
      <ul className="nav">
        <li><NavLink to="/tabbar">Tabbar</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
