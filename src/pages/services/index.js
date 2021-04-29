import React from "react";
import ServiceDetailsBtn from './components/ServiceDetailsBtn';
import { services } from './service-content';

export default function ServicePage() {
    return (
        <div className="d-flex flex-fill justify-content-center container pb-4">
            <div className="row align-items-center">
                { services.map((item, key) => (
                    <ServiceDetailsBtn key={ key } id={ item.id } service={ item.name } imgLink={ item.coverImg } />
                )) }
            </div>
        </div>

    );
} 