import "./Header.css";
import "./CollectionSort";
import CollectionSort from "./CollectionSort";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { useContext, useState } from "react";
import ThemeContext from "../ThemeContext";
<link rel="stylesheet" href="style.css" />;

function Header({ categories, filter, setFilter }) {
  const { value, setValue, min, setMin, max, setMax } =
    useContext(ThemeContext);
  function valuetext(value) {
    return { value };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value[0]);
  };

  return (
    <>
      <Grid container spacing={4} xs={7}>
        <Grid item xs>
          <h1>My Shop</h1>
        </Grid>
      </Grid>
      <Grid container spacing={1} justify={"space-around"} xs={7}>
        <Grid item xs={4}>
          <label>select price:</label>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={min}
            max={max}
          />
        </Grid>

        <Grid item xs={3}>
          <CollectionSort
            categories={categories}
            filter={filter}
            setFilter={setFilter}
          />
        </Grid>

        <Grid item xs={3}>
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
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
