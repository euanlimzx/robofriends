import React from 'react';

//Components that wrap other components contain children, found under their props 

const Scroll = (props) => {
    return (
        <div style={{overflowY:"scroll", border:'1px solid black', height:'500px'}}>
            {props.children}
        </div>
    )
}
//w.r.t style@div. curly brackets represent a javascript expression
    //{overflowY} is a javascript object, {} is a way of representing a variable in JSX

export default Scroll