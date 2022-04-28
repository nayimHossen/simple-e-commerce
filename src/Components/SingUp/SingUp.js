import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SingUp = () => {
    const [errorMassage, setErrorMassage] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setErrorMassage('Your password did not match');
            return;
        };
        if (password.length < 6) {
            setErrorMassage('password must be 6 characters of longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/shop')
    }

    return (
        <div className='form-container'>
            <div className='input-container'>
                <div>
                    <h2 className='form-title'>Sing Up</h2>

                    <form onSubmit={handleSignUpSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input ref={emailRef} type="email" name='email' placeholder='Enter your email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input ref={passwordRef} type="password" name='password' placeholder='Enter your password' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="confirm-password">Conform Password</label>
                            <input ref={ConfirmPasswordRef} type="password" name='confirm-password' placeholder='Enter your password' required />
                        </div>
                        <p style={{ color: "red" }}>{errorMassage}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>Already have an account? <Link className='form-link' to="/login">login page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;