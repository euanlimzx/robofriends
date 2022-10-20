import React from 'react';
//can potentially use ES6 destructuring
//https://www.javascripttutorial.net/es6/destructuring/
const Card = ({id,name,email}) => {
    return(
       <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
       </div> 
    );
}

export default Card;