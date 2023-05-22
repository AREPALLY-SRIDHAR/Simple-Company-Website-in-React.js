// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://thumbs.dreamstime.com/b/financial-growth-icon-beautiful-meticulously-designed-120822509.jpg"
      />
      <h1 className="title">Flyer Financial Technologies</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/careers">
          Careers
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
