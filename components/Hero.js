import React from 'react';
import TypedText from './TypedText';

export default function Hero() {

    return (
        <div className="hero-container">
            <div className="hero-left">
                <TypedText />

                <p className='hero-body-text'>I'm a recent graduate of Claremont McKenna College and just moved to New York City! I'm an Economics major turned software engineer and I'm looking to pursue a career in the technology industry through building user-focused products. My passion lies in improving the lives of people through creating seamless experiences and optimizing various aspects of daily life.</p>
            </div>
            <div className="hero-right">
                <img src="/memoji.png" alt="" className="hero-img" />
            </div>
        </div>
    )
}