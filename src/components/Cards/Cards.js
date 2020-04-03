import React from 'react';
import Card from './Card/Card';

const Cards = (props)=> {
    return(
        <div>
            {props.cards.map((card) => {
                return (
                    <Card card={card} />
                );
            })}
        </div>
    );
}

export default Cards;