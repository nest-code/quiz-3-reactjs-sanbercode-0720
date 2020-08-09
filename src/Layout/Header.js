import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <React.Fragment>
      <nav>
        <div className="foto">
        </div>
        
        <ul>
          <li>
            <Link className="links" to="/">Home</Link>
          </li>
          <li>
            <Link className="links" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )

}

export default Header;
