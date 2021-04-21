import React from 'react';
import PropTypes from 'prop-types';
import MenuList from './MenuList';

export default function MenuSections({ sections, menu, search }) {


    return (
        <div className="container-fluid text-dark">
            <div className="row">
                { sections.map((item, key) => (
                    <div key={ key } className="card col-md p-3 my-2">
                        <h1 className="display-5 user-select-none">{ item.charAt(0).toUpperCase() + item.slice(1) }</h1>
                        <hr></hr>
                        <MenuList menu={ menu } section={ item } search={ search } />
                    </div>
                )) }
            </div>
        </div>
    );
}

MenuSections.propTypes = {
    sections: PropTypes.array,
    menu: PropTypes.array,
    search: PropTypes.string
};