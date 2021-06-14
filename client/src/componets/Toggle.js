import {useState} from "react";
function Toggle(){
    const [Display,setDisplay]=useState('block');

    function blockOrNone(){
        Display==='block'?setDisplay('none'):setDisplay('block');
    }

    return(
        <div>
        <div style={{"display":Display}}>Hide me!</div>
        <button onClick={blockOrNone}>click</button>
        </div>
    );

}

export default Toggle;