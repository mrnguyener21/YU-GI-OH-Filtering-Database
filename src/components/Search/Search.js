import React, { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';

import fetchCards from '../../api/fetchCards.js';
import data from '../../data';
import styles from './Search.module.css';
import './Search.css';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const Search = ({ setCards, setCurrentPage }) => {
  const [details, setDetails] = useState({ searchTerm: '', type: '', attribute: '', race: '', archetype: '', fromLevel: '', toLevel: '', fromAttack: '', toAttack: '', fromDefense: '', toDefense: '', sortBy: '', sortOrder: '' });
  const [modalIsOpen,setIsOpen] = useState(false);
  const { searchTerm, type, attribute, race, archetype, fromLevel, toLevel, fromAttack, toAttack, fromDefense, toDefense, sortBy, sortOrder} = details;

  const openModal = () => setIsOpen(true);
  const closeModal= () => setIsOpen(false);

  const formatGroupLabel = data => (
    <div className={styles.groupStyles}>
      <span>{data.label}</span>
      <span className={styles.groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const handleClick = async () => {
    setCards(await fetchCards(details));
    setCurrentPage(1);
    closeModal();
  };

  return (
    <>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Filters" >
        <Select className={styles.select} placeholder="Select an attribute" value={attribute} onChange={(attribute) => setDetails({...details,attribute})} options={data.attributeOptions} />
          <Select className={styles.select} placeholder="Select a monster card type" value={type} onChange={(type) => setDetails({...details, type })} options={data.typeOptions} />
          <Select className={styles.select} placeholder="Select a race" value={race} onChange={(race) => setDetails({...details,race})} options={data.groupedOptions} formatGroupLabel={formatGroupLabel} />
          <Select className={styles.select} placeholder="Select an archetype" value={archetype} onChange={(archetype) => setDetails({...details,archetype})} options={data.archetypeOptions} />
          <div style={{width: '400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
          </div>
        <div className="propertyContainer"> 
          <h2 style={{margin: 0, width: '100px'}}>Attack: </h2>
          <input className="propertyInput" placeholder="From: " value={fromAttack} onChange={(e) => setDetails({...details,fromAttack:e.target.value})} /> 
          <input className="propertyInput" placeholder="To: " value={toAttack} onChange={(e) => setDetails({...details, toAttack: e.target.value })} /> 
        </div>
        <div className="propertyContainer"> 
          <h2 style={{margin: 0, width: '100px'}}>Defense: </h2>
          <input className="propertyInput" placeholder="From: " value={fromDefense} onChange={(e) => setDetails({...details, fromDefense: e.target.value })} /> 
          <input className="propertyInput" placeholder="To: " value={toDefense} onChange={(e) => setDetails({...details, toDefense: e.target.value })} /> 
        </div>
        <div className="propertyContainer"> 
          <h2 style={{margin: 0, width: '100px'}}>Level: </h2>
          <input className="propertyInput" placeholder="From: " value={fromLevel} onChange={(e) => setDetails({...details, fromLevel: e.target.value})} /> 
          <input className="propertyInput" placeholder="To: " value={toLevel} onChange={(e) => setDetails({...details, toLevel: e.target.value})} /> 
        </div>
        <Select className={styles.select} placeholder="Sort by" value={sortBy} onChange={(sortBy) => setDetails({...details, sortBy})} options={data.sortByOptions} />
        <Select className={styles.select} placeholder="Sort by" value={sortOrder} onChange={(sortOrder) => setDetails({...details, sortOrder})} options={data.sortOrderOptions} />
        <button className={styles.button} type="button" onClick={handleClick}>SEARCH</button>
          <button className={styles.button} onClick={closeModal}>Close</button>
        </Modal>
      <div className={styles.container}>
        <div className={styles.containerContents}>
          <input className={styles.mainInput} placeholder="Search..." value={searchTerm} onChange={(e) => setDetails({...details, searchTerm: e.target.value })}/>
          <div>
            <button className={styles.button} type="button" onClick={handleClick}>Search</button>
            <button className={styles.button} onClick={openModal}>More Filters</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Search;
