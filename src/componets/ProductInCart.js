import './ProductInCart.css';
import ThemeContext from '../ThemeContext';
import { useContext } from 'react';



function ProductInCart({id, image,description,title,price,returns,removeFromList}){

  // const{cartProducts}=useContext(ThemeContext);



    return(
    <div className="product-in-cart">
        <h6>{title}</h6>
        <img className='small-image'
        src={image}
        alt={description}
        title={title}
        ></img>
        <h6>${price}</h6>
        <br/>
         <span class="badge">{returns}</span>
<br/>
       <div>
         <button className='remove-button' onClick={()=>removeFromList({id})}>remove</button>
       </div>
       <br/>
    </div>
    );

}

export default ProductInCart;