import React, { useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/orders')
    }

    return (
        <div className='form-container'>
            <div className='input-container'>
                <div>
                    <h2 className='form-title'>Login</h2>

                    <form onSubmit={handleLoginSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input ref={emailRef} type="email" name='email' placeholder='Enter your email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input ref={passwordRef} type="password" name='password' placeholder='Enter your password' required />
                        </div>

                        <p style={{ color: "red" }}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>New on simple-E-commerce? <Link className='form-link' to="/signUp">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;