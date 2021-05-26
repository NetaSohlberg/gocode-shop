import ProductCard from "./ProductCard.js";
<<<<<<< HEAD
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
=======
import './Products.css';
function Products({products ,addToList}){
    return(
        <section class="products">
            {products.map(product=>
                <ProductCard
                key={product.key}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                addToList={addToList}
                />
                )}
        </section>
    );
>>>>>>> 724a228d84b6116bbe025f64da63a945be75925d
}
export default Products;
