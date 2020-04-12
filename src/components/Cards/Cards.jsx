import React from 'react';
import Card from './Card/Card';

import styles from './Cards.module.css';

const Cards = ({ cards }) => (
  <div className={styles.container}>
    {cards.map((card) => <Card card={card} />)}
    //this maps through the day we took from the api using fetch data and we retreived it in the Cards component thanks to us putting a props card Cards for it in in the parent component(in this case is the App component)
  </div>
);

export default Cards;
