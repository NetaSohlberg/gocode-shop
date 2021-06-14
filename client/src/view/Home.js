import Header from "../componets/Header.js";
import Products from "../componets/Products";
import { useContext, useEffect, useState } from "react";
import Cart from "../componets/Cart";
import ThemeContext from "../ThemeContext";
import Loading from "../componets/Loading.js";
import Math from "react";
// import Loading form "../componets/Loading";

function Home() {
  const {
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
  } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  let prices = [];

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data), setLoading(false));
  }, []);

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  const categories = Object.keys(groupBy(products, "category"));

  useEffect(() => {
    prices = [];
  }, [filter]);

  function filterProducts(product) {
    if (
      (product.category === filter || filter === "all") &&
      product.price > value[0] &&
      product.price < value[1]
    ) {
      prices.push(product.price);
      return product;
    } else {
      return;
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <Header
              categories={categories}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          <div>
            <Products
              products={products.filter((product) => filterProducts(product))}
              //   (element) =>
              //     (element.category === filter || filter === "all") &&
              //     element.price > value[0] &&
              //     element.price < value[1]
              // )}
              addToList={addToList}
            />
          </div>
        </>
      )}
    </>
  );
}
// ttttttt
export default Home;
