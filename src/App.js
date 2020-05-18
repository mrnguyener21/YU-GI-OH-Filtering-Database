import React, { useState, useEffect } from 'react';

import { Cards, Search, Loading } from './components';
import styles from './App.module.css';
import fetchCards from './api/fetchCards.js';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const setAndFetchCards = async () => {
      setCards(await fetchCards({}));
    }

    setAndFetchCards();
  }, []);

  const cardsPerPage = 10;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const numberOfPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <Search setCards={setCards} setCurrentPage={setCurrentPage} setHasSearched={setHasSearched} />
      <Loading hasSearched={hasSearched} cards={cards} />
      <Cards cards={currentCards} numberOfPages={numberOfPages} paginate={paginate} currentPage={currentPage}/>
    </div>
  );
};

export default App;
