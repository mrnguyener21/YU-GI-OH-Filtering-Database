import React from 'react';

import styles from './Card.module.css';

const Card = ({ card: { name, type, description, image } })=>(
    <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <img className={styles.image} src={image}/>
        <h2 className={styles.type}>{type}</h2>
        <p className={styles.description}>{description}</p>
    </div>
);

export default Card;