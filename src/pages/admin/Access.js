import React from 'react';
import { Link } from 'react-router-dom';

export default function Access({ accessKeyCodeId }) {

    return (
        <div className="d-flex flex-fill flex-column justify-content-around align-items-center loadFade">
            <Link to="/admin-Menu">
                <button className="btn btn-lg btn-warning" onClick={ () => window.scrollTo(0, 0) }>Menu</button>
            </Link>
            <Link to="/admin-Services" className="btn btn-lg btn-dark">Services</Link>
        </div>
    );
}