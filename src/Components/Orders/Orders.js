import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';

const Orders = () => {
    const [products,] = useProducts();
    const [cart,] = useCart(products);

    return (
        <div>
            <h2>This is order{products.length}</h2>
            <h3>cart has {cart.length}</h3>
        </div>
    );
};

export default Orders;