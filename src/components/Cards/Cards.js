import React from 'react';
import Card from './Card/Card';

import styles from './Cards.module.css';

const Cards = ({ cards }) => (
    <div className={styles.container}>
        {cards.map((card) => <Card card={card} />)}
    </div>
);

export default Cards;


