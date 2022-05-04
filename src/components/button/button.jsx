import React from 'react';

class Button extends React.Component{
    render(){
        console.log(this);
        return <button class="button-standart" id={this.props.id}> {this.props.children} </button>;
        
    }
}

// function Button(){
//     return <button class="button-standart"> {this.props.text}</button>;
// }

export default Button;