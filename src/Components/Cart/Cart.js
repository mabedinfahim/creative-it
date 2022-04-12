import React from 'react';
import './Cart.css';

const Cart = ({cart,id}) => {
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Item quantity:{cart.length}</p>
                {cart.map(show=>
                    <div className='item'>
                    <img src={show.img} alt="" srcset="" />
                    <p>{show.name}</p>
                </div>
                )}
        </div>
    );
};

export default Cart;