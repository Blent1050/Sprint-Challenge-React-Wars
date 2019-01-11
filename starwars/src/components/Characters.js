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
                    <p>
                    {
                        char.birth_year === 'unknown' ? `It appears that ${char.name} does not have a birth date` :
                        char.gender === 'n/a' ? `Was created on ${char.birth_year} ` : `Was born on${char.birth_year}`
                    } 
                    </p>
                    <p>Currently {char.height} inches tall and has a mass of {char.weight}</p>
                </div>
                ) 
            })
        }
        </div>
    )
    
}

export default Characters;