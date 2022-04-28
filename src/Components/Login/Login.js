import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div className='input-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form action="">
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Enter your email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input type="email" name='password' placeholder='Enter your password' required />
                        </div>
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>New to simple-E-commerce? <Link className='form-link' to="/signUp">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;