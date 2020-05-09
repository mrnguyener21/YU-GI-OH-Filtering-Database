import React, { useState } from 'react';
import { default as ReactModal } from 'react-modal';

import styles from './Modal.module.css';

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
  
  ReactModal.setAppElement('#root');

const Modal = ({isModalOpen, onRequestClose, children }) => {
    return (
        <ReactModal 
          overlayClassName={styles.Overlay}
          className={styles.Modal}
          isOpen={isModalOpen}
          onRequestClose={onRequestClose} 
          // style={styles} 
          contentLabel="Filters" >
            {children}
        </ReactModal>
    )
}

export default Modal;
