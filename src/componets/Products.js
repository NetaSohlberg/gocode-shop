import ProductCard from "./ProductCard.js";
import './Products.css';
function Products(props){
    console.log(props);

    return(
        <section class="products">
            {(props.Pro).map(element=>ProductCard(element))}
        <div>hip</div>
        </section>
    );
}
export default Products;