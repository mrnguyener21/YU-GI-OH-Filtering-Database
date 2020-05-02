import React from 'react';

import styles from './Pagination.module.css';

const Pagination = ({ paginate, currentPage, numberOfPages }) => (
  <div className={styles.container}>
    <button className={styles.button} type="button" onClick={(currentPage !== 1) ? () => paginate(currentPage - 1) : null}>Previous</button>
    <h1 className={styles.pageNumber}>{currentPage}</h1>
    <button className={styles.button} type="button" onClick={(currentPage !== numberOfPages) ? () => paginate(currentPage + 1) : null}>Next</button>
  </div>
);

export default Pagination;

