import React from 'react';

import styles from './Card.module.css';

const truncate = (str, max) => {
  const array = str.trim().split(' ');
  const ellipsis = array.length > max ? '...' : '';

  return array.slice(0, max).join(' ') + ellipsis;
};

const Card = ({ card: { name, type, description, image, isMonster, properties } }) => (
  <div className={styles.container}>
    <h2 className={styles.name}>{name}</h2>
    <img className={styles.image} src={image} alt={name} />
    <h2 className={styles.type}>{type}</h2>
    <div className={styles.propertyContainer}>
        { isMonster ? properties.map(({label, value}) => <h4 className={styles.property}>{label}: {value}</h4>) : null }
    </div>
    <p className={styles.description}>{truncate(description, 25)}</p>
  </div>
);

export default Card;
