import ProductCard from "./ProductCard.js";
import "./Products.css";

function Products({ products, addToList }) {
  return (
    <section class="products">
      {products.map((product) => (
        <ProductCard
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          addToList={addToList}
          id={product.id}
        />
      ))}
    </section>
  );
}
export default Products;
