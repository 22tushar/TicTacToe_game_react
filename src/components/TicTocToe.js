import React from 'react';
import '../components/SquareBlock.css'
function SqareBlock(props) {
    const classes=props.className ? `${props.className} square `: "square";
    return(
       <span className={classes} onClick={props.onClick} >{props.state}</span>
    );
 }
 
 export default SqareBlock;