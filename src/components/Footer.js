import React from "react";
import LOGO from '../icons/LOGO.png';
import jasper from '../icons/jasper.png';

export default function Footer() {
    const fontSize = 14;
    return (
        <footer className="fixed-bottom d-flex justify-content-center text-center pe-none" style={ { fontSize } }>
            <div className="d-flex align-items-center bg-light rounded shadow p-1 mb-2">
                <img src={ LOGO } alt="LOGO" width="36" />
                <div className="d-flex px-1 me-3">
                    <small>&copy;</small><small>2021</small>
                </div>

                <div className="d-flex px-1 flex-column text-muted" style={ { fontSize: fontSize / 1.8 } }>
                    <small>powered</small>
                    <small>with</small>
                </div>
                <img src={ jasper } alt="JASPER" width="26" />
            </div>
        </footer>
    );
}
