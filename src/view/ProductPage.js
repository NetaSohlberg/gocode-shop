import { useParams } from "react-router";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "./ProductPage.css";

function ProductPage() {
  const { products } = useContext(ThemeContext);
  const { key } = useParams();
  const product = products.find((element) => element.id == key);
  console.log(key, "lll", products);

  return (
    <div class="section-fluid-main">
      <div class="section">
        <div class="info-wrap mob-margin">
          <p class="title-up">{product.category}</p>
          <h2>{product.title}</h2>
          <h4>${product.price}</h4>
          <div class="section-fluid">
            <label for="desc-1">Description</label>
            <p>{product.description}</p>
          </div>
        </div>
        <h5>Choose upholstery:</h5>
      </div>

      <div class="clearfix"></div>
      <div class="info-wrap">
        <a href="#" class="btn">
          <i class="uil uil-shopping-cart icon"></i> Add To Cart
        </a>
      </div>

      <a href="https://front.codes/" class="logo" target="_blank">
        <img src={product.image} alt="" />
      </a>
    </div>
    // </div>
  );
}

export default ProductPage;
