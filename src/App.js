import './App.css';
import Header from './componets/Header.js';
import Products from './componets/Products';
import {useContext, useEffect, useState} from "react";
import Loading from './componets/Loading.js';
import Cart from './componets/Cart';
import ThemeContext from './ThemeContext';
// import Toggle from './componets/Toggle';
//let cartProducts=[];
{/* <ThemeContext.Provider value={cartProducts} > */}

function App() {
  const{cartProducts}=useContext(ThemeContext);
  const[totalPrice,setTotalPrice]=useState(0);
  const[loading,setLoading]=useState(true);
  const [productsLi,setProductsLi]=useState([]);
  const[filter,setFilter]=useState('all');

  useEffect(
    ()=>{
      setLoading(true);
      fetch("https://fakestoreapi.com/products")
      .then((response)=>response.json())
      .then((data)=>setProductsLi(data));
      setLoading(false);
    },[]
  );

  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});
  
  const categories = Object.keys(groupBy(productsLi, 'category'));

  function addToList(title){
    const product=productsLi.filter((element)=>element.title===title);
    const index=cartProducts.findIndex((element)=>element[0].id===product[0].id);
    if(index!=-1){     
      cartProducts[index][0].returns++;
    }
    else{
      cartProducts.push(product);
      cartProducts[cartProducts.length-1][0].returns=1;
    }
    setTotalPrice(totalPrice+product[0].price);
  }

  function removeFromList({id}){
    const index=cartProducts.findIndex((element)=>element[0].id===id);
    let price=cartProducts[index][0].price;
    if(cartProducts[index][0].returns>1){
      cartProducts[index][0].returns--;
    }
    else{
      cartProducts.splice(index,1);
    }
    setTotalPrice(totalPrice-price);
  }


  return (
    <div>
      {loading&&<Loading display='block'/>}
      <div><Cart totalPrice={totalPrice} removeFromList={removeFromList}/></div>
      <div><Header categories={categories} filter={filter} setFilter={setFilter}/></div>
      <div>
      
    < Products products={productsLi.filter((element)=>element.category===filter||filter==='all')} addToList={addToList} />
    
    </div>
    </div>
  );
}
export default App;
