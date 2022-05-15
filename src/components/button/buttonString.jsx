import React from 'react';

function ButtonString(props){

    function showTeacherContent() {
        console.log('click')
    }   

    // if(props.elementStringButton === undefined) props.elementStringButton = "чё?";
    return (
        <button onClick={showTeacherContent} className="button-string"> {props.elementStringButton}</button>
    )
}

export default ButtonString;