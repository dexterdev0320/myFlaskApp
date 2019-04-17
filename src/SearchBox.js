import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <input
        className='pa3 ba b--green bg-lightest-blue'
        type="search"
        placeholder="Search Robots here"
        onChange={searchChange} 
        />
    );
}

export default Searchbox;