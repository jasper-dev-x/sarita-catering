import React from "react";
import { Link } from "react-router-dom";
import NavLink from './NavLink';
import LOGO from '../icons/LOGO.png';
import { onClickRubberBand } from './animations';

export default function NavBar() {

  return (
    <nav className="d-flex justify-content-center fixed-top navbar-light bg-light shadow user-select-none">
      <div className="btn-group dropend align-items-center py-1">
        <Link className="mx-auto" to="/">
          <img id="homeIcon" src={ LOGO } alt="Home" className="d-block" width="65em" onClick={ (x) => onClickRubberBand(x.target.id) } />
        </Link>
        <div className="dropdown">
          <button className="btn btn-outline-light" type="button" id="navbarMenu" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="navbar-toggler-icon" />
          </button>
          <ul id="navMenu" className="dropdown-menu border-light bg-light text-center mt-2" style={ { width: window.innerWidth + 1, height: window.innerHeight } } aria-labelledby="navbarMenu">
            <li><hr className="dropdown-divider bg-warning"></hr></li>
            <NavLink name="About" toLink="/about" />
            <NavLink name="Menu" toLink="/menu" />
            {/* <NavLink name="Store" toLink="/store" /> */}
            <NavLink name="Services" toLink="/services" />
            {/* <NavLink name="Events" toLink="/events" /> */}
            <NavLink name="Book" toLink="/book" />
            {/* <NavLink name="Testimonials" toLink="/testimonials"/> */ }
          </ul>
        </div>
      </div>
    </nav>
  );
}
