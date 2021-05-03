import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AccessBtn from './components/AccessBtn';

export default function Admin({ login, setLogin = x => x, accessKeyCodeId, setAccessKeyCodeId = x => x }) {

    useEffect(() => {
        setLogin('');
    }, [setLogin]);

    // BTN FADE AND FORM VALIDATION
    useEffect(() => {
        if (login.length !== 4 && login.length > 0) {
            document.getElementById("adminLogin").classList.add("is-invalid");
        }
        else if (login.length === 4) {
            document.getElementById("adminLogin").classList.replace("is-invalid", "is-valid");
        }
        else
            document.getElementById("adminLogin").classList.remove("is-invalid", "is-valid");
    }, [login]);

    return (
        <div className="d-flex flex-fill flex-column justify-content-center align-items-center loadFade">
            <AccessBtn login={ login } accessKeyCodeId={ accessKeyCodeId } setAccessKeyCodeId={ setAccessKeyCodeId } />
            <div className="form-floating my-3" style={ { width: 100 } }>
                <input id="adminLogin" type="number" className="form-control" placeholder="####" value={ login } onChange={ (x) => {
                    if (login.length < 4)
                        setLogin(x.target.value);
                    else
                        setLogin(login.toString().slice(0, 3).trim());
                } } />
                <label htmlFor="adminLogin">Login</label>
            </div>
        </div>
    );
}

Admin.propTypes = {
    login: PropTypes.string
};