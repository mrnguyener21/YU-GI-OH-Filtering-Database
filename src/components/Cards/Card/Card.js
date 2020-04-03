import React from 'react';

const Card = (props)=> {
    return(
        <div>
            <h1>CARD</h1>
            <h1>{props.card.name}</h1>
            <h2>{props.card.type}</h2>
            <p>{props.card.description}</p>
            <img src={props.card.image}/>
        </div>
    )
}

export default Card;