import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    // console.log(props.car);
    const { car } = props;
    let total = 0;
    for (const p of car) {
        total = total + p.price
    }
    return (
        <div>
            <div className='cart'>
                <h3>Cart Description:</h3>
                <p>Selected Items: {car.length}</p>
                <p>Total Price: {total.toFixed(2)}</p>
                <p>Tax:</p>
                <p>Grand Price: </p>
            </div>
        </div>
    );
};

export default Cart;