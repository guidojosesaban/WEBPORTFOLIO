import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const menuItemStyle = 'menuItem';
  const menuItemActStyle = 'menuItemAct';
  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const getActiveStyle = (to) => {
    return location.pathname === to ? menuItemActStyle : menuItemStyle;
  };

  return (
    <header className="mainHeader">
      <ul className="mainMenu">
        <li>
          <p className="Logotipo">
            DEV<span>GUIDO</span>
          </p>
        </li>
        {menuItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={getActiveStyle(item.to)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
