import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <Link to="/shop">
                <img className='logo-img' src={logo} alt="logo" />
            </Link>

            <div className='nav-links'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user
                        ? <Link className='auth-link' to="" onClick={() => signOut(auth)}>Sign Out</Link>
                        : <Link className='auth-link' to="/login">Sign in</Link>
                }
            </div>
        </nav>
    );
};

export default Header;