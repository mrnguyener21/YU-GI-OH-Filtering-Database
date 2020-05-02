import React, { useState } from 'react';
import Select from 'react-select';

import fetchCards from '../../api/fetchCards.js';
import data from '../../data';
import styles from './Search.module.css';
import './Search.css';

const Search = ({ setCards, setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('');
  const [attribute, setAttribute] = useState('');
  const [race, setRace] = useState('');
  const [archetype, setArchetype] = useState('');
  const [fromLevel, setFromLevel] = useState('');
  const [toLevel, setToLevel] = useState('');
  const [fromAttack, setFromAttack] = useState('');
  const [toAttack, setToAttack] = useState('');
  const [fromDefense, setFromDefense] = useState('');
  const [toDefense, setToDefense] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('')

const formatGroupLabel = data => (
    <div className={styles.groupStyles}>
      <span>{data.label}</span>
      <span className={styles.groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const handleClick = async () => {
    setCards(await fetchCards(searchTerm, attribute.value, type.value, race.value, archetype.value, fromAttack, toAttack, fromDefense, toDefense, fromLevel, toLevel, sortBy.value, sortOrder.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className={styles.container}>
        <input className={styles.input} placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Select className={styles.select} placeholder="Select an attribute" value={attribute} onChange={(attribute) => setAttribute(attribute)} options={data.attributeOptions} />
          <Select className={styles.select} placeholder="Select a monster card type" value={type} onChange={(type) => setType(type)} options={data.typeOptions} />
          <Select className={styles.select} placeholder="Select a race" value={race} onChange={(race) => setRace(race)} options={data.groupedOptions} formatGroupLabel={formatGroupLabel} />
          <Select className={styles.select} placeholder="Select an archetype" value={archetype} onChange={(archetype) => setArchetype(archetype)} options={data.archetypeOptions} />
          <div style={{width: '400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
          </div>
        <div className="propertyContainer"> 
          <h2 style={{color: 'white', margin: 0, width: '100px'}}>Attack: </h2>
          <input className="propertyInput" placeholder="From: " value={fromAttack} onChange={(e) => setFromAttack(e.target.value)} /> 
          <input className="propertyInput" placeholder="To: " value={toAttack} onChange={(e) => setToAttack(e.target.value)} /> 
        </div>
        <div className="propertyContainer"> 
          <h2 style={{color: 'white', margin: 0, width: '100px'}}>Defense: </h2>
          <input className="propertyInput" placeholder="From: " value={fromDefense} onChange={(e) => setFromDefense(e.target.value)} /> 
          <input className="propertyInput" placeholder="To: " value={toDefense} onChange={(e) => setToDefense(e.target.value)} /> 
        </div>
        <div className="propertyContainer"> 
          <h2 style={{color: 'white', margin: 0, width: '100px'}}>Level: </h2>
          <input className="propertyInput" placeholder="From: " value={fromLevel} onChange={(e) => setFromLevel(e.target.value)} /> 
          <input className="propertyInput" placeholder="To: " value={toLevel} onChange={(e) => setToLevel(e.target.value)} /> 
        </div>
        <Select className={styles.select} placeholder="Sort by" value={sortBy} onChange={(sortBy) => setSortBy(sortBy)} options={data.sortByOptions} />
        <Select className={styles.select} placeholder="Sort by" value={sortOrder} onChange={(sortOrder) => setSortOrder(sortOrder)} options={data.sortOrderOptions} />
        <button className={styles.button} type="button" onClick={handleClick}>SEARCH</button>
      </div>
    </>
  )
};

export default Search;
