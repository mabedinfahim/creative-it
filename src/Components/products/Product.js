import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product,handelAddToCart}) => {
    const {name,img,price,description}=product;
    
    return (
        <div className='product'>
           <div className='sub-product'>
                <img src={img} alt="" srcset="" />
                <h4 className='product-name'>{name}</h4>
                    <h6>Price: {price} /=</h6>
                    <p>{description.slice(0,100)}</p>
                    <button onClick={()=>handelAddToCart(product)} className='cart-btn'>
                        <p className='cart-text'>Add to cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
           </div>
           
        </div>
    );
};

export default Product;