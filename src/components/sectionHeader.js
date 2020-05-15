import React from 'react';
import styles from '../styles/sectionHeader.module.css';

export default ({header}) => {
    return (
        <div className={styles.headerContainer}>
          <p className={styles.headerTitle}>{header}</p>
        </div>
    );
}
