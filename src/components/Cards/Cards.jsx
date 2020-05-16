import React from 'react';

import Card from './Card/Card';
import Pagination from '../Pagination//Pagination'
import styles from './Cards.module.css';

const Cards = ({ cards, numberOfPages, paginate, currentPage }) => {
  return cards.length !== 0 && (
    <div className={styles.container}>
      {cards.map((card, i) => <Card key={i} card={card} />)}
      <Pagination numberOfPages={numberOfPages} paginate={paginate} currentPage={currentPage} />

    </div>
  );
};

export default Cards;
