import React from 'react';

import styles from './RangeSelect.module.css';

const RangeSelect = ({ fromValue, toValue, label, setDetails, details }) => {
    return (
        <div className={styles.propertyContainer}> 
          <h2 className={styles.propertyTitle}>{label}: </h2>
          <input className={styles.propertyInput} placeholder="From: " value={fromValue} onChange={(e) => setDetails({...details, [`from${label}`]: e.target.value})} /> 
          <input className={styles.propertyInput} placeholder="To: " value={toValue} onChange={(e) => setDetails({...details, [`to${label}`]: e.target.value })} /> 
        </div>
    )
}

export default RangeSelect;
