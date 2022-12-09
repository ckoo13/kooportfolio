import React from 'react';
import TypedText from './TypedText';

export default function Hero() {

    return (
        <div className="hero-container">
            <div className="hero-left">
                <TypedText />
            </div>
            <div className="hero-right">
                <img src="/memoji.png" alt="" className="hero-img" />
            </div>
        </div>
    )
}