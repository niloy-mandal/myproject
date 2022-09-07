import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [product, setProduct] = useState([])

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleAddToCart = (produc) => {
        // console.log(product);
        const newCart = [...carts, produc]
        setCarts(newCart);
    }
    return (
        <div className='shop'>
            <div className="product-part">
                {
                    product.map(a => <Product
                        handleAddToCart={handleAddToCart}
                        key={a.id}
                        pro={a}
                    ></Product>)
                }
            </div>
            <div className="cart-part">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;