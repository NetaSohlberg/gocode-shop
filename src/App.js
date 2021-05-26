<<<<<<< HEAD
import "./App.css";
import Header from "./componets/Header.js";
import Products from "./componets/Products";
import { useContext, useEffect, useState } from "react";
import Loading from "./componets/Loading.js";
import Cart from "./componets/Cart";
import ThemeContext from "./ThemeContext";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Home from "./view/Home";
import ProductPage from "./view/ProductPage";
import Grid from "@material-ui/core/Grid";
=======
import './App.css';
import Header from './componets/Header.js';
import Products from './componets/Products';
import {useContext, useEffect, useState} from "react";
import Loading from './componets/Loading.js';
import Cart from './componets/Cart';
import ThemeContext from './ThemeContext';
>>>>>>> 724a228d84b6116bbe025f64da63a945be75925d
// import Toggle from './componets/Toggle';
//let cartProducts=[];
{/* <ThemeContext.Provider value={cartProducts} > */}

function App() {
<<<<<<< HEAD
  // const [cartProducts] = useContext(ThemeContext);
  // const { cartProducts, productsLi, setProductsLi } = useContext(ThemeContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState("all");
  const [value, setValue] = useState([0, 1000]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  function addToList(title) {
    const product = products.find((element) => element.title === title);
    const index = cartProducts.findIndex(
      (element) => element.id === product.id
    );
    if (index !== -1) {
      cartProducts[index].quantity++;
    } else {
      setCartProducts(cartProducts.push(product));
      cartProducts[cartProducts.length - 1].quantity = 1;
    }
    setTotalPrice(totalPrice + product.price);
    setCartProducts(cartProducts);
  }

  function removeFromList({ id }) {
    const index = cartProducts.findIndex((element) => element.id === id);
    let price = cartProducts[index].price;
    if (cartProducts[index].quantity > 1) {
      cartProducts[index].quantity--;
    } else {
      cartProducts.splice(index, 1);
    }
    setTotalPrice(totalPrice - price);
  }

  return (
    <>
      <ThemeContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          setProducts,
          products,
          value,
          setValue,
          addToList,
          min,
          setMin,
          max,
          setMax,
        }}
      >
        <>
          <div>
            <Cart totalPrice={totalPrice} removeFromList={removeFromList} />
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </>

        <Switch>
          <Route path="/ProductPage/:key">
            <ProductPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </>
=======
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
>>>>>>> 724a228d84b6116bbe025f64da63a945be75925d
  );
}
export default App;
