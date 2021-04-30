import React, { useState } from 'react';

export default function AdminForm({ menu, setMenu = x => x }) {
    const [name, setName] = useState('');
    const [menuSection, setMenuSection] = useState('');
    var requestOptions;

    async function addMenuItem() {
        requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                searchName: name.toLowerCase(),
                menuSection
            })
        };
        try {
            const newMenu = await fetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/saritacatering-vglhw/service/menu/incoming_webhook/addMenuItem", requestOptions)
                .then(res => res.json());
            setName('');
            setMenuSection('');
            setMenu([...newMenu]);
        } catch (err) {
            console.error("ERROR ADDING ITEM: ", err);
        }
    }

    return (
        <div className="d-flex row justify-content-around align-items-center mb-1">
            <div className="col-md-6 mb-3 mb-md-0">
                <div className="form-floating text-warning">
                    <input id="name" type="text" className="form-control text-light bg-dark border-warning" placeholder="Name" autoComplete="off" value={ name } onChange={ (x) => setName(x.target.value) } />
                    <label htmlFor="name">Name</label>
                </div>
            </div>
            <div className="col-md-2 col mb-3 mb-md-0">
                <div className="form-floating text-warning">
                    <select id="section" className="form-select text-light bg-dark border-warning px-3" placeholder="Choose One" value={ menuSection } onChange={ (x) => setMenuSection(x.target.value) }>
                        <option value="" defaultValue>(Choose One)</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="salads">Salads</option>
                        <option value="dinners">Dinners</option>
                    </select>
                    <label htmlFor="section">Section</label>
                </div>
            </div>
            <div className="col-md-1 d-grid px-md-0 px-5">
                <button className="btn btn-lg btn-success" onClick={ addMenuItem }>Add</button>
            </div>
        </div>
    );
}