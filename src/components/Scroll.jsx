import React from "react";

//this wraps around the other component searchbox so we just want it to return whats inside of it
//use children 
const Scroll = (props) => {
    return (
    //you can add styles to the div using double curly brackets in jsx 
    <div style={{overflowY: 'scroll', border: '6px solid black', height: '800px'}}>
        {props.children}
    </div>
    );
};


export default Scroll;