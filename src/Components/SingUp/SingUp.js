import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {

    return (
        <div className='form-container'>
            <div className='input-container'>
                <div>
                    <h2 className='form-title'>Sing Up</h2>
                    <form action="">
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Enter your email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input type="email" name='password' placeholder='Enter your password' required />
                        </div>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>Alradi have an account? <Link className='form-link' to="/login">Go to login page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;