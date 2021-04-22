import './Header.css';
import './CollectionSort';
import CollectionSort from './CollectionSort';
<link rel="stylesheet" href="style.css"/>

function Header({categories,filter,setFilter}){
    return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <CollectionSort categories={categories} filter={filter} setFilter={setFilter}/>
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>

    );
}

export default Header;