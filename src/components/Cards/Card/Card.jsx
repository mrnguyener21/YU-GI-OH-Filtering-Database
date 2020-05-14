import React from 'react';

import styles from './Card.module.css';

const Card = ({ card: { name, type, description, image, isMonster, properties } }) => (
  <div className={styles.container}>
    <h2 className={styles.name}>{name}</h2>
    <img className={styles.image} src={image} alt={name} />
    { isMonster ? (
        <div className={styles.propertyContainer}>
            {properties.map(({label, value}, i) => <h4 key={i} className={styles.property}>{label}: {value}</h4>) }
        </div>
      ): null}
    <p className={styles.description}>{description}</p>
  </div>
);

export default Card;
