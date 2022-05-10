import React from 'react';

function ButtonString(props){
    // if(props.elementStringButton === undefined) props.elementStringButton = "чё?";
    return (
        <button className="button-string"> {props.elementStringButton}</button>
    )
}

export default ButtonString;