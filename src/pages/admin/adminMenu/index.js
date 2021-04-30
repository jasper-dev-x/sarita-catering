import React, { useState } from 'react';
import AdminMenuSections from './components/AdminMenuSections';
import AdminForm from './components/AdminForm';

export default function AdminMenu({ menu, setMenu = x => x }) {
    const [search, setSearch] = useState('');
    const allMenuSections = ['appetizers', 'salads', 'dinners'];

    return (
        <div className="d-flex flex-fill flex-column text-center py-4 bg-dark text-white">
            <div className="container py-3">
                <div className="d-flex flex-column mb-4 user-select-none">
                    <h1 className="display-2 txt text-warning">Admin Menu</h1>
                    <span className="text-muted lead">Modify Your Menu</span>
                </div>
                <AdminForm menu={ menu } setMenu={ setMenu } />
                <div className="row">
                    <div className="col py-1">
                        <input type="text" className="form-control form-control-lg mt-2" value={ search } onChange={ (x) => setSearch(x.target.value) } placeholder="Search" />
                    </div>
                </div>
                <hr></hr>
                <AdminMenuSections menu={ menu } setMenu={ setMenu } sections={ allMenuSections } search={ search } />
            </div>
        </div >
    );
}