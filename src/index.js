<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import ThemeContext from "./ThemeContext";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={{cartProducts:[]}} >
    <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 724a228d84b6116bbe025f64da63a945be75925d
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
