import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";

import { Cards, Search, Pagination } from './components';
import styles from './App.module.css';
import fetchCards from './api/fetchCards.js';

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => setCards(await fetchCards({})))();
  }, []);

  const cardsPerPage = 10;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const numberOfPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0);
  }

  if(!cards.length && !searchTerm) {
    return (
      <div className={styles.loadingContainer}>
        <RingLoader size={400} color={"#fff"} loading={true} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Search setCards={setCards} setCurrentPage={setCurrentPage} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      { 
        !cards.length && searchTerm ? (
          <div className={styles.loadingContainer}>
            <h1 style={{color: 'white'}}>Incorrent search term.</h1>
          </div>
        ) : (
          <>
            <Cards cards={currentCards} />
            <Pagination numberOfPages={numberOfPages} paginate={paginate} currentPage={currentPage} />
          </>
        )
      }
    </div>
  );
};

export default App;
