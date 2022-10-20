import React from 'react';

//destructuring is when you grab the props object and take its properties
const SearchBox=({searchChange})=>{
    return(
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
            type="search" placeholder="search" onChange={searchChange}/>

        </div>
        )

}

export default SearchBox