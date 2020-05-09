import React from 'react';

import styles from './Card.module.css';

const Card = ({ card: { name, type, description, image, isMonster, properties } }) => (
  <div className={styles.container}>
    <h2 className={styles.name}>{name}</h2>
    <img className={styles.image} src={image} alt={name} />
    <h2 className={styles.type}>{type}</h2>
    <div className={styles.propertyContainer}>
        { isMonster ? properties.map(({label, value}) => <h4 className={styles.property}>{label}: {value}</h4>) : null }
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Card;
