import React from 'react';
import './StarWars.css';

function Characters(props){
    console.log(props);
    return(
        <div className='characters-container'>
        {
            props.starwarsChars.map(char => {
                return(
                <div key={char.created} className='character'>
                    <h2>{char.name}</h2>
                    <p>Was born on {char.birth_year}</p>
                    <p>Currently {char.height} inches tall and has a mass of {char.weight}</p>
                </div>
                ) 
            })
        }
        </div>
    )
    
}

export default Characters;