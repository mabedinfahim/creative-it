import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Product from '../products/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [data,setData]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>
        {fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))}
    ,[]);
    const handelAddToCart=(data)=>{
        const newCart=[...cart,data];
        setCart(newCart)
    }
    return (
        <div className='main'>
            <div className='product'>
               {data.map(product=><Product product={product} key={product.id} handelAddToCart={handelAddToCart}></Product>)}
            </div>
            <div className='right'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;