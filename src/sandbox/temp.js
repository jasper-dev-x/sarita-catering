import React from "react";
import { Link } from "react-router-dom";
import NavLink from './components/NavLink';

export default function NavBar({ fontSize }) {
  return (
    <div id="navbar" className="sticky-top" >
      <nav className="d-flex navbar-light bg-light">
        <div className="dropdown align-self-center">
          <button className="btn btn-outline-light ms-4" type="button" id="navbarMenu" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="dropdown-menu border-light bg-light" aria-labelledby="navbarMenu">
            <NavLink name="About" toLink="/about" fontSize={ fontSize } />
            <NavLink name="Menu" toLink="/menu" fontSize={ fontSize } />
            <NavLink name="Store" toLink="/store" fontSize={ fontSize } />
            <NavLink name="Services" toLink="/services" fontSize={ fontSize } />
            <NavLink name="Events" toLink="/events" fontSize={ fontSize } />
            <NavLink name="Book" toLink="/book" fontSize={ fontSize } />
            <NavLink name="Testimonials" toLink="/testimonials" fontSize={ fontSize } />
          </ul>
        </div>
        <div className="flex-grow-1 text-center">
          <Link
            className="linkTxt me-5 pe-4"
            to="/"
            style={ { fontSize: fontSize - 4 } } >
            <span style={ { fontSize: fontSize + 16 } }>S</span>arita{ " " }
            <span style={ { fontSize: fontSize + 16 } }>C</span>atering
          </Link>
        </div>
      </nav>
    </div>
  );
}
