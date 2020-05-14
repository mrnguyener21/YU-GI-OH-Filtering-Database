import React from 'react';
import { default as ReactModal } from 'react-modal';

import styles from './Modal.module.css';

ReactModal.setAppElement('#root');

const Modal = ({isModalOpen, onRequestClose, children }) => {
    return (
      <ReactModal overlayClassName={styles.Overlay}className={styles.Modal}isOpen={isModalOpen}onRequestClose={onRequestClose} contentLabel="Filters" >
        {children}
      </ReactModal>
    )
}

export default Modal;
