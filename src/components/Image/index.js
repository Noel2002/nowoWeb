import React from 'react';
import styles from './styles.module.css';


const Image = (props) => {
  const {source} = props
  return (
    <div className={styles.root}>
        <img src={source} className={styles.image}/>
    </div>
  )
}

export default Image