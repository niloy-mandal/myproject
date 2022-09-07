import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    return (
        <div>
            <div className='cart'>
                <h3>Cart Description:</h3>
                <p>Selected Items:</p>
                <p>Total Price:</p>
                <p>Tax:</p>
                <p>Grand Price: </p>
            </div>
        </div>
    );
};

export default Cart;