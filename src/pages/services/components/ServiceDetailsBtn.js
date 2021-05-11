import React from 'react';
import { Link } from "react-router-dom";

export default function ServiceDetailBtn({ id, imgLink, service }) {
    const borderRadius = 40;

    return (
        <div className="col-md py-4 px-md-4">
            <div className="card bg-light shadow" style={ { borderRadius } } onClick={ () => window.scrollTo(0, 0) }>
                <img src={ imgLink } className="d-block mx-lg-auto img-fluid" alt="..." style={ { borderRadius , height: `80vh`} } />
                <Link to={ `/service/${id}` } className="card-img-overlay d-flex justify-content-center align-items-center btn btn-outline-light" style={ { borderRadius } }>
                    <button className="txt btn text-dark p-3" style={ { backgroundColor: `rgba(247,247,247,0.8)`, borderRadius } }>
                        <span className="display-3">{ service }</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}