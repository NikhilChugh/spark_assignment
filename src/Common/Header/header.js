import React from 'react';
import './header.scss';


const Header = () => {
    return (
       <div className="headerContainer" data-test="header-container">
       <div className="headerLeft">LOGO</div>
       <ul className="headerRight">
           <li>Home</li>
           <li>My Portfolio</li>
           <li>Clients</li>
           <li><span>Get in Touch</span></li>
       </ul>
       </div>
    );
}

export default Header;