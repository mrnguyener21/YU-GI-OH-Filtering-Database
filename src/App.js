import React, { useState, useEffect } from 'react';

import { Cards, Search, Pagination } from './components';
import styles from './App.module.css';
import fetchCards from './api/fetchCards.js';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => setCards(await fetchCards()))();
  }, []);

  const cardsPerPage = 10;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const numberOfPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <Search setCards={setCards} setCurrentPage={setCurrentPage} />
      <Cards cards={currentCards} />
      <Pagination numberOfPages={numberOfPages} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default App;
