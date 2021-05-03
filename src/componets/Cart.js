import './Cart.css'
import ProductInCart from './ProductInCart';
import ThemeContext from '../ThemeContext';
import { useContext, useEffect } from 'react';

function Cart({totalPrice, removeFromList}){

  const{cartProducts}=useContext(ThemeContext);

    return (
<div class="container">
  <div class="shopping-cart">
    <div class="shopping-cart-header">
      <i class="fa fa-shopping-cart cart-icon"></i>
      {/* <span class="badge">3</span> */}
      <div class="shopping-cart-total">
        <span class="lighter-text">Total:</span>
        <span class="main-color-text">${totalPrice.toFixed(2)}</span>
      </div>

    </div>
    <br/>
    <br/>
<section className='scroll'>
        {cartProducts.map(product=><div>
            <ProductInCart
            id={product[0].id}
            image={product[0].image}
            description={product[0].description}
            title={product[0].title}
            price={product[0].price}
            returns={product[0].returns}
            removeFromList={removeFromList}
            />
            </div>
          )}

    </section>
    <a href="#" class="button">buy!</a>
  </div> 
</div> 
    );
}

export default Cart;