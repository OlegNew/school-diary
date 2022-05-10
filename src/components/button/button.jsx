import React from 'react';
// import classNames from 'classnames';


function Button(props){
    console.log(this);
    return (
    <button 
    onClick={props.onClick}
    className="button-standart" 
    id={props.id}
    > 
        {props.children} 

    </button>)
}



export default Button;