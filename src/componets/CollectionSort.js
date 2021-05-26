<<<<<<< HEAD
import "./CollectionSort.css";
=======
import './CollectionSort.css';
>>>>>>> 724a228d84b6116bbe025f64da63a945be75925d
// import {useState} from 'react';

function CollectionSort({ categories, filter, setFilter }) {
  function choice() {
    const selectBox = document.getElementById("selectBox");
    const category = selectBox.options[selectBox.selectedIndex].value;
    setFilter(category);
  }

  return (
    <>
      {/* < className="collection-sort"> */}
      <label>Filter by:</label>
      <select id="selectBox" onChange={() => choice()}>
        <option value="all">all</option>
        {categories.map((element) => (
          <option value={element}>{element}</option>
        ))}
      </select>
      {/* </> */}
    </>
  );
}

export default CollectionSort;
