import React from 'react';
import './Product.css';

const Product = ({ product }) => {

    const { name, img, seller, price, rating } = product;
    return (
        <div className='product'>
            <img src={img} alt="img" />
            <p className='product-name'>{name}</p>
            <div className='product-info'>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {rating} star</small></p>
            </div>
            <button className='main-button'>Add To Cart</button>
        </div>
    );
};

export default Product;