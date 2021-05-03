import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

export default function AccessBtn({ login, accessKeyCodeId, setAccessKeyCodeId = x => x }) {
    useEffect(() => {
        if (login === '1234')
            setAccessKeyCodeId(shortid.generate());
    }, [login, setAccessKeyCodeId]);

    if (login === '1234') {
        sessionStorage.setItem('adminKeyCodeId', accessKeyCodeId);
        return (
            <button id="adminBtnLogin" className="txt btn btn-lg btn-warning loadFade">
                <Link to={ `/admin-menu` } onClick={ () => window.scrollTo(0, 0) }>
                    Enter
                </Link>
            </button>
        );
    }
    return <div />;
}