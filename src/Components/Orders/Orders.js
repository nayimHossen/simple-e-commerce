import React from 'react';
import './Orders.css';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const [products,] = useProducts();
    const [cart, setCart] = useCart(products);

    const hendleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    };

    return (
        <div className='order-container'>
            <div className="details-container">
                {
                    cart.map(pd => <Review
                        hendleRemoveProduct={hendleRemoveProduct}
                        key={pd.id} product={pd}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;