import React from 'react';
import Link from 'next/link';


export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="navbar-left">
            <Link className="navbar-link navbar-name" href='/' >
                    <h1 className="navbar-link">Calvin Koo</h1>
                </Link>
            </div>
            <div className="navbar-right">
                <Link className="navbar-link" href='/' >
                    <h1 className="navbar-link">Home</h1>
                </Link>
                <Link className="navbar-link" href='/playground'>
                    <h1 className="navbar-link">Playground</h1>
                </Link>
                <Link className="navbar-link" href='/about'>
                    <h1 className="navbar-link">About</h1>
                </Link>
                <h1 className="navbar-link">Resume</h1>
            </div>
        </div>
    )
}