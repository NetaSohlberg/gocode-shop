import './CollectionSort.css';
// import {useState} from 'react';

function CollectionSort({categories ,filter, setFilter})
{
  function choice(){
    const selectBox = document.getElementById("selectBox");
    const category = selectBox.options[selectBox.selectedIndex].value;
    setFilter(category);
  }

    return(
        <div className="collection-sort">
          <label>Filter by:</label>
          <select id="selectBox" onChange={()=>choice()}>
            <option value="all">all</option>
            {categories.map(element=><option value={element}>
              {element}</option>)}
           </select>
        </div>
        );

}

export default CollectionSort;
