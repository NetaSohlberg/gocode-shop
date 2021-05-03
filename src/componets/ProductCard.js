import './ProductCard.css';
function ProductCard({key,title,price,description,category,image,addToList}){
// const key={key};
// const category={category};
  return(
<div className="product-card">
      <div className="product-image">
        <img
        src={image}
        alt={description}
        title={title}
        ></img>
      </div>
      <div className="product-info">
           <h5>{title}</h5>
           <h6>${price}</h6>
       </div>
       <div>
         <button className='add-button' onClick={()=>addToList(title)}>add to cart</button>
       </div>
    </div>
  );
}
    
export default ProductCard;