import './ProductCard.css';
function ProductCard(props){
  console.log(props);
  return(
    <div className="product-card">
      <div className="product-image">
        <img
        src={props.image}
        // alt={props.description}
        // title={props.title}>
        ></img>
      </div>
      <div className="product-info">
           <h5>{props.title}</h5>
           <h6>${props.price}</h6>
       </div>
    </div>
  );
    // return(
    //     <div className="product-card">
    //     <div className="product-image">
    //       <img
    //         src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
    //       />
    //     </div>
    //     <div className="product-info">
    //       <h5>Winter Jacket</h5>
    //       <h6>$99.99</h6>
    //     </div>
    //   </div>
    // );
}

export default ProductCard;