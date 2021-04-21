import React, { useState, useEffect } from "react";
import MenuSections from "./components/MenuSections";
import MenuRadio from "./components/MenuRadio";
import { menu } from "./menu-content";

export default function MenuPage() {
    const [search, setSearch] = useState("");
    const allMenuSections = ['appetizers', 'salads', 'dinners'];
    const [sections, setSections] = useState(allMenuSections);
    const [menuRadio, setMenuRadio] = useState("");

    useEffect(() => {
    }, [menuRadio]);

    var filterMenu = (x) => {
        // Beautiful work around to refresh page !!!
        setMenuRadio(x.target.value);
        if (x.target.value !== "all")
            setSections(allMenuSections.filter((section) => section === x.target.value));
        else
            setSections(allMenuSections);
    };

    return (
        <div className="d-flex flex-fill flex-column text-center pt-2 pb-5 bg-dark text-white">
            <div className="container py-3">
                <div className="d-flex flex-column pb-3 user-select-none">
                    <h1 className="display-2 txt">Three Course Meal</h1>
                    <span className="text-muted lead">Appetizer - Salad - Dinner</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-around">
                            <input type="radio" className="btn-check" name="menuRadioOption" id="allRadio" value="all" onClick={ filterMenu } autoComplete="off" />
                            <label className="btn btn-outline-light border-0" htmlFor="allRadio">All</label>
                            { allMenuSections.map((section, key) => (
                                <MenuRadio key={ key } filterMenu={ filterMenu } radioName={ section } />
                            )) }
                        </div>
                        <div className="col-md-4 py-1 pe-md-5">
                            <input type="text" className="form-control form-control mt-2" value={ search } onChange={ (x) => setSearch(x.target.value) } placeholder="Search" />
                        </div>
                    </div>
                    <hr></hr>
                    <MenuSections menu={ menu } sections={ sections } search={ search } />
                    <div className="d-flex flex-column py-2 user-select-none">
                        <span className="text-warning lead">$150 / Person</span>
                        <small className="text-muted lead">*Menu Customization Available for a $30 Non-Refundable Deposit*</small>
                    </div>
                </div>
            </div>
        </div>
    );
}