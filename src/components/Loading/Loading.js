import React from 'react';
import RingLoader from "react-spinners/RingLoader";

import styles from './Loading.module.css';

const Loading = ({ cards, hasSearched }) => {
    if(!cards.length && hasSearched) {
      return (
        <div className={styles.loadingContainer}>
          <h1 style={{ color: 'white' }}>No cards found.</h1>
        </div>
      );
    } else if(!cards.length) {
      return (
        <div className={styles.loadingContainer}>
          <RingLoader size={400} color={"#fff"} loading={true} />
        </div>
      );
    } else {
      return null;
    }
}

export default Loading;
