<<<<<<< HEAD
import "./ProductCard.css";
import "../view/ProductPage";
import { Link } from "react-router-dom";
// import { Link, Route, Switch, withRouter } from "react-router-dom";
// import ProductPage from "./ProductPage";
function ProductCard({
  title,
  price,
  description,
  category,
  image,
  addToList,
  id,
}) {
  return (
    <div className="product-card">
=======
import './ProductCard.css';
function ProductCard({key,title,price,description,category,image,addToList}){
// const key={key};
// const category={category};
  return(
<div className="product-card">
>>>>>>> 724a228d84b6116bbe025f64da63a945be75925d
      <div className="product-image">
        <img src={image} alt={description} title={title}></img>
      </div>
      <div className="product-info">
<<<<<<< HEAD
        <h5>{title}</h5>
        <h6>${price}</h6>
      </div>
      <div>
        <button className="add-button" onClick={() => addToList(title)}>
          add to cart
        </button>
        <Link to={`/ProductPage/${id}`}>
          <span>See More...</span>
        </Link>
      </div>
=======
           <h5>{title}</h5>
           <h6>${price}</h6>
       </div>
       <div>
         <button className='add-button' onClick={()=>addToList(title)}>add to cart</button>
       </div>
>>>>>>> 724a228d84b6116bbe025f64da63a945be75925d
    </div>
  );
}

export default ProductCard;
