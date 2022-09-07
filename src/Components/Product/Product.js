import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, company, price, picture } = props.pro;


    return (
        <div className='product'>
            <img src={picture} alt="broken" />
            <div className="details">
                <p>Name: {name}</p>
                <p>Company: {company}</p>
                <p>Price: {price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.pro)} className='btn-regular'>Add To Cart</button>
        </div>
    );
};

export default Product;