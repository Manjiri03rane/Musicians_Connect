import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        
  <nav>
  <div className="nav-wrapper">
      <a to="#" className="brand-logo">MusiciansConnect</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="sass.html">Home</NavLink></li>
        <li><NavLink to="/Artist">Artists Corner</NavLink></li>
        <li><NavLink to="collapsible.html">Gigs</NavLink></li>
        <li><NavLink to="collapsible.html">Community</NavLink></li>
         </ul>
         <ul id="nav-mobile" className="left hide-on-med-and-down">
         <li><NavLink to="sass.html"><i className="material-icons">search</i></NavLink></li>
         <li><NavLink to="sass.html">Sign Up</NavLink></li>
         <li><NavLink to="sass.html">Login</NavLink></li>


         </ul>
    </div>

</nav>
      
    )
}

export default Navbar;