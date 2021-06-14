import "./Cart.css";
import ProductInCart from "./ProductInCart";
import ThemeContext from "../ThemeContext";
import { useContext, useEffect } from "react";

function Cart({ totalPrice, removeFromList }) {
  const { cartProducts, setCartProducts } = useContext(ThemeContext);
  console.log({ cartProducts });

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
        <br />
        <br />
        <section className="scroll">
          {cartProducts.map((product) => (
            <div>
              <ProductInCart
                id={product.id}
                image={product.image}
                description={product.description}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                removeFromList={removeFromList}
              />
            </div>
          ))}
        </section>
        <a href="#" class="button">
          buy!
        </a>
      </div>
    </div>
  );
}

export default Cart;
