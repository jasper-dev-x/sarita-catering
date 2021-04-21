import React, { useState, useEffect } from "react";

export default function BookForm() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [numGuests, setNumGuests] = useState('');
    const [budget, setBudget] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [service, setService] = useState('Choose...');
    const [message, setMessage] = useState('');

    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        setSubject(`${service} | ${first} ${last}`);
        setBody(
            "%0D%0APhone Number: " + phone +
            "%0D%0ALocation: " + location +
            "%0D%0ADate: " + date +
            "%0D%0AStart: " + startTime +
            "%0D%0AEnd: " + endTime +
            "%0D%0A# of Guests: " + numGuests +
            "%0D%0ABudget: " + budget +
            "%0D%0AExtra Info: " + message +
            "%0D%0A"
        );
    }, [first, last, phone, location, numGuests, budget, date, startTime, endTime, service, message]);

    var openMail = () => {
        window.open(`mailto:admin@sarita-catering.com?subject=${subject}&body=${body.toString()}`);
    };

    return (
        <form className="row justify-content-center px-3 mb-4" onSubmit={ openMail }>
            <div className="row">
                <div className="col-md">
                    <div>
                        <br></br>
                        <h1 className="display-6 text-warning">Contact</h1>
                        <hr></hr>
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputFirst" className="form-label">First Name</label>
                        <input type="text" className="form-control form-control-sm" id="inputFirst" placeholder="Jane" value={ first } onChange={ (x) => setFirst(x.target.value) } required />
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputLast" className="form-label">Last Name</label>
                        <input type="text" className="form-control form-control-sm" id="inputLast" placeholder="Doe" value={ last } onChange={ (x) => setLast(x.target.value) } required />
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                        <input type="text" className="form-control form-control-sm" id="inputPhone" placeholder="(123) 456-7890" value={ phone } onChange={ (x) => setPhone(x.target.value) } required />
                    </div>
                </div>
                <div className="col-md">
                    <div>
                        <br></br>
                        <h1 className="display-6 text-warning">Event</h1>
                        <hr></hr>
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputLocation" className="form-label">Location</label>
                        <input type="text" className="form-control form-control-sm" id="inputLocation" placeholder="1234 Main St" value={ location } onChange={ (x) => setLocation(x.target.value) } required />
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputDate" className="form-label">Date</label>
                        <input type="date" className="form-control form-control-sm" id="inputDate" value={ date } onChange={ (x) => setDate(x.target.value) } required />
                    </div>
                    <div className="col-md-10 my-2">
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="inputStart" className="form-label">Start Time</label>
                                <input type="time" className="form-control form-control-sm" id="inputStart" value={ startTime } onChange={ (x) => setStartTime(x.target.value) } required />
                            </div>
                            <div className="col-6">
                                <label htmlFor="inputEnd" className="form-label">End Time</label>
                                <input type="time" className="form-control form-control-sm" id="inputEnd" value={ endTime } onChange={ (x) => setEndTime(x.target.value) } required />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 my-2">
                    </div>
                </div>

                <div className="col-md">
                    <div>
                        <br></br>
                        <h1 className="display-6 text-warning">Request</h1>
                        <hr></hr>
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputService" className="form-label">Service</label>
                        <div className="dropdown">
                            <div className="input-group input-group-sm w-100">
                                <input className="form-control form-control-sm" value={ service } disabled required />
                                <button type="button" className="btn btn-outline-light dropdown-toggle" id="dropdownLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul id="inputService" className="dropdown-menu" aria-labelledby="dropDownLink">
                                    <li onClick={ (x) => {
                                        setService('Private Chef');
                                        x.preventDefault();
                                    } }>
                                        <a href="/" className="dropdown-item">Private Chef</a>
                                    </li>
                                    <li onClick={ (x) => {
                                        setService('Catering');
                                        x.preventDefault();
                                    } }>
                                        <a href="/" className="dropdown-item">Catering</a>
                                    </li>
                                    <li onClick={ (x) => {
                                        setService('Meal Prep');
                                        x.preventDefault();
                                    } }>
                                        <a href="/" className="dropdown-item">Meal Prep</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputNumGuests" className="form-label"># of Guests</label>
                        <input type="number" className="form-control form-control-sm" id="inputNumGuest" value={ numGuests } placeholder="0" onChange={ (x) => setNumGuests(x.target.value) } required />
                    </div>
                    <div className="col-md-10 my-2">
                        <label htmlFor="inputBudget" className="form-label">Budget</label>
                        <div className="input-group input-group-sm">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control form-control-sm" id="inputBudget" value={ budget } placeholder="0" onChange={ (x) => setBudget(x.target.value) } required />
                            <span className="input-group-text">.00</span>
                        </div>
                        <br></br>
                    </div>
                </div>

                <div className="col-12">
                    <textarea className="form-control form-control-sm" id="message" rows="3" placeholder="Extra Questions or Concerns..." value={ message } onChange={ (x) => setMessage(x.target.value) }></textarea>
                    <br></br>
                    <br></br>
                </div>

                <div className="d-grid col-12">
                    <button className="btn btn-warning" type="submit">Preview in Mail App</button>
                </div>
            </div>
        </form>
    );
}