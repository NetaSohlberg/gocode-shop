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
      <div className="product-image">
        <img src={image} alt={description} title={title}></img>
      </div>
      <div className="product-info">
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
    </div>
  );
}

export default ProductCard;
