import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <span className='n-left'><a href="/home">Home</a></span>
            <span className='n-right'><a href="/items">Items</a><a href="/contact">Contact</a><a href="/about">About</a></span>
        </nav>
    );
};

export default Header;