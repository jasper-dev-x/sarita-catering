import React from 'react';
import NotFoundPage from '../NotFound';

export default function Access({ accessKeyCodeId }) {
    const sessionId = sessionStorage.getItem('adminKeyCodeId');
    if (!sessionId || sessionId !== accessKeyCodeId)
        return <NotFoundPage />;
    return (
        <div className="d-flex flex-fill flex-column justify-content-around align-items-center loadFade">
            <button className="btn btn-lg btn-warning">Menu</button>
            <button className="btn btn-lg btn-dark">Services</button>
        </div>
    );
}