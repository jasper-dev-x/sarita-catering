import React from 'react';
import NotFound from '../NotFound';
import { services } from './service-content';
import { Link } from "react-router-dom";
import CaroItem from './components/CaroItem';

export default function ServiceDetailsPage({ match }) {
    const id = match.params.id;
    // eslint-disable-next-line eqeqeq
    const service = services.find((x) => x.id == id);
    if (!service) return <NotFound />;
    const timer = 6000;
    var counter = 0;

    return (
        <div className="d-flex flex-fill flex-column justify-content-center align-items-center">
            <div className="container col-xxl-8 px-4 pb-5">
                <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <div id={ `carousel${id}` } className="carousel slide carousel-fade loadFade" data-bs-ride="carousel" data-bs-interval={ timer } >
                            <div className="carousel-inner">

                                { service.imgList.map((item, key) => {
                                    // eslint-disable-next-line eqeqeq
                                    if (counter == 0) {
                                        return (
                                            <div className="carousel-item d-flex active">
                                                <img src={ service.imgList[counter++].src } className="d-block rounded w-100" alt="..." />
                                            </div>
                                        );
                                    }
                                    return <CaroItem key={ key } src={ service.imgList[counter++].src } alt="..." />;
                                }) }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={ `#carousel${id}` } data-bs-slide="prev">
                                <span className="carousel-control-prev-icon btn bg-warning" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={ `#carousel${id}` } data-bs-slide="next">
                                <span className="carousel-control-next-icon btn bg-warning" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 txt text-center fw-bold lh-1 mb-3">{ service.name }</h1>
                        <p className="lead">
                            Aliquam et elit tellus. Sed purus nisl, tempus nec mollis sit amet, iaculis ac erat.
                            Maecenas sit amet euismod arcu, a ultrices risus. Nam nunc metus, sollicitudin at felis id,
                            euismod pharetra nulla. Phasellus pretium, magna et convallis finibus, lacus lectus finibus velit,
                            vel congue nibh lectus nec mi. Nunc vel nibh risus. Nulla eros mi, pretium nec felis a, hendrerit bibendum ipsum.
                            Nunc vel condimentum elit.
                        </p>
                        <div className="row">
                            <div className="col-6 btn">
                                <Link to={ `/book` } className="btn btn-warning d-flex flex-fill justify-content-center px-2 p-2" onClick={ () => window.scrollTo(0, 0) }>
                                    <span className="lead">Book <span className="txt">Sarita</span></span>
                                </Link>
                            </div>
                            <div className="col-6 btn">
                                <Link to={ `/services` } className="btn btn-dark d-flex flex-fill justify-content-center px-2 p-2" onClick={ () => window.scrollTo(0, 0) }>
                                    <span className="lead">Other Services</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}