import ProductCard from "./ProductCard.js";
import './Products.css';
function Products({products,filter}){
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
                filter={filter}
                />
                )}
        </section>
    );
}
export default Products;