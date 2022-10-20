import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    //when working with loops, you must always give a unique key
    //key prop should have something that does not change, a better key in this case would be something unique like id
    const cardComponent = robots.map((user,i)=>{
        return (
            <Card
             key={i}
             id={robots[i].id} 
             name={robots[i].name} 
             email={robots[i].email}
             />  
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;