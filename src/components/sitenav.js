import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'gatsby';
import './sitenav.css';

const NavLink = ({children}) => <span className="NavLink">{children}</span>;

NavLink.propTypes = {
  children: PropTypes.node,
};

const Navbar = ({children}) => (
  <div className="Navbar">
    {React.Children.map(children, child => (
      <NavLink>{React.cloneElement(child)}</NavLink>
    ))}
  </div>
);

Navbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

const SiteNav = () => (
  <Navbar>
    <Link to="/">Home</Link>
    <Link to="/countdown/">Countdown</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/about/">About</Link>
    <Link to="/recipes/">Recipes</Link>
    <Link to="/resume/">Resume</Link>
  </Navbar>
);

export default SiteNav;
