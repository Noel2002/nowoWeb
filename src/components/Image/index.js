import React from 'react';
import styles from './styles.module.css';


const Image = (props) => {
  const {source, alt, orientation} = props
  return (
    <div 
      className={`${styles.root} ${styles[orientation?orientation:"landscape"]}`}
    >
        <img src={source} className={styles.image} alt={alt} />
    </div>
  )
}

export default Image