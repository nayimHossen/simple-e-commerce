import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Review.css';

const Review = ({ product, hendleRemoveProduct }) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />

            <div className="review-item-info">
                <div className="review-details">
                    <p className='product-name'>{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='delete-button' onClick={() => hendleRemoveProduct(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;