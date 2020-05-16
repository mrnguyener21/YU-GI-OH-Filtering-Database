import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";

import { Cards, Search, Pagination } from './components';
import styles from './App.module.css';
import fetchCards from './api/fetchCards.js';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    (async () => setCards(await fetchCards({})))();
  }, []);

  const cardsPerPage = 10;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const numberOfPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    window.scrollTo(0, 0);
  }

  let LoadingComponent = null;

  if(!cards.length && hasSearched) {
    LoadingComponent = (
      <div className={styles.loadingContainer}>
        <h1 style={{ color: 'white' }}>No cards found.</h1>
      </div>
    );
  } else if(!cards.length) {
    LoadingComponent = (
      <div className={styles.loadingContainer}>
        <RingLoader size={400} color={"#fff"} loading={true} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Search setCards={setCards} setCurrentPage={setCurrentPage} setHasSearched={setHasSearched} />
      {
        LoadingComponent 
          ? LoadingComponent
          : (
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
