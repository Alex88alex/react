import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
const Header  = () => (
    <header>
        <nav>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact">Contacts</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;