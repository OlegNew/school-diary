import React from 'react';
import User from '../form/User';
// import classNames from 'classnames';


function Button(props){
    // console.log(this);
    return (
    <div>
           <button 
    onClick={props.onClick}
    className="button-standart button" 
    id={props.id}
    > 
        {props.children} 

    </button>
    {/* <User/> */}
    </div>
 )
}



export default Button;