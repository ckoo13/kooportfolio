import React from 'react';
import Link from 'next/link';


export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="navbar-left">
                <p>Calvin Koo</p>
            </div>
            <div className="navbar-right">
                <Link href='/' >
                    <h1>Home</h1>
                </Link>
                <Link href='/playground'>
                    <h1>Playground</h1>
                </Link>
                <Link href='/about'>
                    <h1>About</h1>
                </Link>
                <h1>Resume</h1>
            </div>
        </div>
    )
}