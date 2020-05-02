import React from 'react';

import Card from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({ cards }) => {
  if (cards.length === 0) {
    return <h1>NO CARDS FOUND</h1>;
  }

  return (
    <div className={styles.container}>
      {cards.map((card, i) => <Card key={i} card={card} />)}
    </div>
  );
};

export default Cards;
