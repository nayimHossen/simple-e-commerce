import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const nameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();

    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        const userShipmentAddress = { name, address, phone };

        console.log(userShipmentAddress);

    };

    return (
        <div className='form-container'>
            <div className='input-container'>
                <div>
                    <h2 className='form-title'>Shipment Information</h2>

                    <form onSubmit={handleSignUpSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Name</label>
                            <input ref={nameRef} type="text" name='name' placeholder='your name' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Email</label>
                            <input value={user?.email} readOnly type="text" name='password' placeholder='your email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Address</label>
                            <input ref={addressRef} type="text" name='address' placeholder='your address' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="phone">Phone Number</label>
                            <input ref={phoneRef} type="number" name='phone' placeholder='your phone number' required />
                        </div>

                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;