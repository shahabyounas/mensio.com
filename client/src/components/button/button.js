import React from 'react';
import './button.scss'

const Button = (props) => {
    const { name = "", className= "", onClick } = props;
    return <button className={`button ${className}`}  onClick={onClick} > {name} </button>
}

export default Button;