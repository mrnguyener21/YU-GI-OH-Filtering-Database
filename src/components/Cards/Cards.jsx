import React from 'react';

import Card from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({ cards }) => {
  return cards.length !== 0 && (
    <div className={styles.container}>
      {cards.map((card, i) => <Card key={i} card={card} />)}
    </div>
  );
};

export default Cards;
