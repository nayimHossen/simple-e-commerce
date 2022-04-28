import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/shop">
                <img className='logo-img' src={logo} alt="" />
            </Link>

            <div className='nav-links'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;