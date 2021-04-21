import React from 'react';
import { Link } from "react-router-dom";

export default function NavLink({ toLink, name, fontSize }) {
    return (
        <li className="dropdown-item">
            <Link className="display-6 nav-link" to={ toLink } onClick={ () => window.scrollTo(0, 0) } style={ { fontSize, color: "black" } }>
                { name }
            </Link>
        </li>
    );
}