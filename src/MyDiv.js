// import reactDom from "react-dom";
//  import { findAllInRenderedTree } from "react-dom/test-utils";

const  MyButton=()=>
    <button onClick={()=>alert("Hello!")}>Click here</button>

const MyDiv=()=>
    <div><MyButton></MyButton></div>

//reactDom.render(<MyButton/>, document.getElementById("MyDiv"));

export default MyDiv;