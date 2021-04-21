import React from 'react';
import bufferFade from '../../../IMAGES/buffer.jpg';

export default function CaroItem({ src }) {
    if (src)
        return (
            <div className="carousel-item">
                <img src={ src } className="d-block rounded w-100" alt="..." />
            </div>
        );
    return (
        <div className="carousel-item">
            <img src={ bufferFade } className="d-block w-100" alt="..." />
        </div>
    );
}