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
            <Link to={ `/admin-AccessGranted` }>
                <button id="adminBtnLogin" className="txt btn btn-lg btn-warning loadFade">Enter</button>
            </Link>
        );
    }
    return <div />;
}