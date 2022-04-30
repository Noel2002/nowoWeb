import React from 'react';
import styles from './styles.module.css';


const Image = (props) => {
  const {source, alt} = props
  return (
    <div 
      className={styles.root}
    >
        <img src={source} className={styles.image} alt={alt} />
    </div>
  )
}

export default Image