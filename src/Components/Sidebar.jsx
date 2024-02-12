import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-light border-right">
      <div className="sidebar-heading">React App</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><Link to="/">Home</Link></li>
        <li className="list-group-item"><Link to="/about">About</Link></li>
        <li className="list-group-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;