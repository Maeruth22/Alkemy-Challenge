import React from 'react';
import {Card, Button} from 'reactstrap';

export const Cards = ({character = []}) => {
    return (
      
      <div className='row'>
        {character.map((item, index) => (
        <div key={index} className='col'>
          <div className='card'>
            <img src={item.url} alt='' />
          </div>
        </div>
        ))}

      </div>

    )
}


