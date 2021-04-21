import React from 'react';

export default function MenuRadio({ radioName, filterMenu }) {
    
    return (
        <>
            <input type="radio" className="btn-check" name="menuRadioOption" id={ `${radioName}Radio` } value={ radioName } onClick={ filterMenu } autoComplete="off" />
            <label className="btn btn-outline-warning border-0" htmlFor={ `${radioName}Radio` }>{ radioName.charAt(0).toUpperCase() + radioName.slice(1) }</label>
        </>
    );
}