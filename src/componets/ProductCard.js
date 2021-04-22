import './ProductCard.css';
function ProductCard({key,title,price,description,category,image,filter}){
if(filter==='all' || category===filter)
{
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
    </div>
  );}
  else{
    return false;
  }
}
    
export default ProductCard;